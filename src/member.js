export const getMembers = parsedTalk => {
  // トーク内すべてのメンバー名が重複を排除せず格納される
  const members = [];
  parsedTalk.forEach(talk => {
    
    // membersにtalksOfDay単位のメンバー名を追記する
    members.push(...talk.talksOfDay.map(t => t.user));
  });

  return [...new Set(members)];
};
