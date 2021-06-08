export const getData = async (url = '') => {
  const response = await fetch(url);

  try {
      const data = await response.json();
      return data;
  } catch (e) {
      console.log(`GET method error: ${e}`);
  }
}

export const getDays = (date) => {
  const now = new Date()
  const diff = now.getTime() - (new Date(date)).getTime()
  return parseInt(diff / (1000*60*60*24))
}
