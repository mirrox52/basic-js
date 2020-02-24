module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
  {
    return false;
  }
  let dreamTeam = [];
  let j = -1;
  for (let i = 0; i < members.length; i++)
  {
    if (typeof members[i] === 'string')
    {
      members[i] = members[i].trim();
      dreamTeam[++j] = members[i][0].toUpperCase();
    }
  }
  return dreamTeam.sort().join('');
};