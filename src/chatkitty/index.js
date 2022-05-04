import ChatKitty from 'chatkitty';

//API Key on Chatkitty
export const kitty = ChatKitty.getInstance('40e79f95-01b6-45fb-b847-4aee518acabc');

export function getChannelDisplayName(channel) {
    if (channel.type === 'DIRECT') {
      return channel.members.map((member) => member.displayName).join(', ');
    } else {
      return channel.name;
    }
  }
  