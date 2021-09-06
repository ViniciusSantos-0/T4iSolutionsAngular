export class Util {
  static nomeConcat(item: any[]) {
    return item.map(x => x.name).join(',');
  }
}
