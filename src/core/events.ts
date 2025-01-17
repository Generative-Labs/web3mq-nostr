export const EVENT_MAP = {
  'channel.created': true,
  // 获取channel list
  'channel.getList': true,
  // 改变active channel
  'channel.activeChange': true,
  // 更新channel
  'channel.updated': true,
  // 改变contact
  'contact.activeChange': true,
  // 获取contact模块所有list
  'contact.getList': true,
  // 获取contactlist
  'contact.getContactList': true,
  // 获取followerList
  'contact.getFollowerList': true,
  // 获取followingList
  'contact.getFollowingList': true,
  // 我发送的好友申请列表
  'contact.friendList': true,
  // 收到的好友申请列表
  'contact.reviceList': true,
  //更新contact模块所有list
  'contact.updateList': true,
  //更新contactlist
  'contact.updateContactList': true,
  //更新followerList
  'contact.updateFollowerList': true,
  //更新followingList
  'contact.updateFollowingList': true,
  // connect状态改变
  'connect.changeReadyStatus': true,
  // 消息发送
  'message.send': true,
  // 消息送达
  'message.delivered': true,
  // 消息已读
  'message.read': true,
  // 发送更新消息
  'message.updated': true,
  // 获取message list
  'message.getList': true,
  // 获取message thread list
  'message.getThreadList': true,
  // 打开当前romm下的thread列表
  'message.openAllThread': true,
  // 新通知
  'notification.messageNew': true,
  // 获取notification List
  'notification.getList': true,
  'notification.getMyTopicList': true,
  'notification.getMySubscribeList': true,
};

const IS_VALID_EVENT_MAP_TYPE = { ...EVENT_MAP, all: true };

export const isValidEventType = (eventType: string): boolean =>
  IS_VALID_EVENT_MAP_TYPE[eventType as keyof typeof IS_VALID_EVENT_MAP_TYPE] || false;
