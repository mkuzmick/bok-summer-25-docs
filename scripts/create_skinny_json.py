import json, os
from datetime import datetime

input_dir = '/Users/purple/Development/bok-summer-25-docs/data/week_0/by_day'
output_dir = '/Users/purple/Development/bok-summer-25-docs/data/week_0/by_day/skinny'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Process each JSON file
for filename in os.listdir(input_dir):
    if filename.endswith('.json'):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)
        
        # Skip if input is in the skinny directory
        if '/skinny/' in input_path:
            continue
        
        # Load the JSON file
        with open(input_path, 'r') as f:
            data = json.load(f)
        
        # Create skinny versions of each message
        skinny_messages = []
        for message in data:
            skinny_message = {
                'user': message.get('user', 'unknown'),
                'text': message.get('text', ''),
                'ts': message.get('ts', '')
            }
            
            # Add file names if present
            if 'files' in message and len(message['files']) > 0:
                file_names = []
                for file in message['files']:
                    if 'name' in file and 'pretty_type' in file:
                        file_names.append(f"{file['name']} ({file['pretty_type']})")
                if file_names:
                    skinny_message['files'] = file_names
            
            # Convert timestamp to readable format for reference
            if 'ts' in message:
                try:
                    ts = float(message['ts'].split('.')[0])
                    dt = datetime.fromtimestamp(ts)
                    skinny_message['time'] = dt.strftime('%Y-%m-%d %H:%M:%S')
                except:
                    pass
            
            skinny_messages.append(skinny_message)
        
        # Save the skinny messages
        with open(output_path, 'w') as f:
            json.dump(skinny_messages, f, indent=2)
        
        # Print stats about size reduction
        original_size = os.path.getsize(input_path)
        skinny_size = os.path.getsize(output_path)
        reduction = (1 - skinny_size / original_size) * 100
        
        print(f'Processed {filename}: {original_size:,} bytes → {skinny_size:,} bytes ({reduction:.1f}% reduction)')

print(f'\nAll "skinny" JSON files saved to {output_dir}')
