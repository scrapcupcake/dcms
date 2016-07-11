
export function parseKey(paramSet: any):string{
  let pageKey = paramSet['pageKey'];
  if( !pageKey || pageKey.length === 0){ pageKey = "index"; }
  return pageKey;
}
