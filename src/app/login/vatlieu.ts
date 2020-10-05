export class Vatlieu {
    loaiCoc: number ;
    capTai: number;
     D1: number;                          // đường kính cọc ngoài đv mm
   D2: number; // đường kính trong cọc mm
   soThanh: number;
    cdkCap: number;
    Ec: number; // mo dun đàn hồi bê tông
   EcpMax: number ; // mô đun đàn hồi sau khi căng
   xichmacpt: number; // ứng suất nén ban đầu của bê tông
   ungXuatKeoDut: number;
   ungXuatChayDeo: number;
   xichmapi: number ; // ứng suất căng ban đầu ;
 k = 0.025 ; // hệ số chùng ứng suất
 psi = 2 ; // hệ số từ biến
 epxilon = 0.00015;
 k = 0.025 ; // hệ số chùng ứng suất
 n: number; // ty so giua Ep/Ec
 nphay: number; // ty so modul dan hoi thep / modun dan hoi betong thoi diem truyen us
 deltap: number; // tổn thất do từ biến co ngót
 deltar: number ; // tổn thất do chùng ứng suất
 xichmape: number ; // ứng suất hữu hiệu còn lại trong cốt thép
 xichmace: number; // ứng suất hữu hiệu còn lại trong bê tông
   
}
