import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-light text-center p-4 mt-5 row">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start">
              <h5>เกี่ยวกับเรา</h5>
              <p>
                ศูนย์จัดแสดง จำหน่ายและกระจายสินค้า GI จังหวัดเลย เป็นโครงการ
                "หนึ่งตำบล หนึ่งผลิตภัณฑ์" เพื่อกระตุ้น โอทอป ธุรกิจประกอบการ
                ท้องถิ่น ยกระดับ ฐานะ ความเป็นอยู่ ของคนในชุมชน ให้ดีขึ้น
                มีจุดเด่น เป็นเอกลักษณ์ ของตนเอง ที่สอดคล้องกับวัฒนธรรม
              </p>
            </div>
            <div className="col-md-6 text-start">
              <h5>ติดต่อเรา</h5>
              <p className="">
                ต.เมือง อ.เมือง จ.เลย 42000 <br /> 090-321-6687 <br />{" "}
                053-330-100
                <br /> otopchiangmaicenter@gmail.com
              </p>
            </div>
          </div>
        </div>
        <p className="mt-3">© 2022 Design and upload by rich technologies</p>
      </footer>
    </>
  );
}

export default Footer;
