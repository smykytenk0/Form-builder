export function enumTOArray<T>(objectLike: { [key: string]: T }): T[] {
  return Object.keys(objectLike).map(key => objectLike[key]);
}

export function getTypeFromName(name:string): string{
   return name.match(/[a-zA-Z]/gi).join('');
}
