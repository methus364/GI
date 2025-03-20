import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-light text-center text-md-start py-4">
        <div className="container">
          <div className="row">
            {/* เกี่ยวกับเรา */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h5>เกี่ยวกับเรา</h5>
              <p>
                ศูนย์จัดแสดง จำหน่ายและกระจายสินค้า GI จังหวัดเลย เป็นโครงการ
                "หนึ่งตำบล หนึ่งผลิตภัณฑ์" เพื่อกระตุ้น โอทอป ธุรกิจประกอบการ
                ท้องถิ่น ยกระดับ ฐานะ ความเป็นอยู่ ของคนในชุมชน ให้ดีขึ้น
                มีจุดเด่น เป็นเอกลักษณ์ ของตนเอง ที่สอดคล้องกับวัฒนธรรม
              </p>
            </div>
            {/* ติดต่อเรา */}
            <div className="col-12 col-md-6">
              <h5>ติดต่อเรา</h5>
              <p>
                ต.เมือง อ.เมือง จ.เลย 42000 <br />
                090-321-6687 <br />
                053-330-100 <br />
                otopchiangmaicenter@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
