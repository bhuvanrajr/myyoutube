export const GetData = async function (url){
    const data = await fetch(url);
    const json = await data.json();
    return json;
}