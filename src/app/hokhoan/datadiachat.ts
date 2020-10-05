export class datadiachat {
    
   private _tendat: string ;
   // tslint:disable-next-line: variable-name
   private _chieuday: number;
   private _gamma: number;
   private _loaidat: string;
   private _indexspt: number;

   get tendat() {
    return this._tendat;
  }

  set tendat(tendat: string) {
    this._tendat = tendat;
  }
  
  get chieuday() {
    return this._chieuday;
  }

  set chieuday(chieuday: number) {
    this._chieuday = chieuday;
  }
   
  get gamma() {
    return this._gamma;
  }

  set gamma(gamma: number) {
    this._gamma = gamma;
  }
  get loaidat() {
    return this._loaidat;
  }

  set loaidat(loaidat: string) {
    this._loaidat = loaidat;
  }
  get indexspt() {
    return this._indexspt;
  }

  set indexspt(indexspt: number) {
    this._indexspt = indexspt;
  }
}
