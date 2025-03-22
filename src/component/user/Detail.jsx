const product = [
  {
    id: "1",
    name: "ข้าวเหนียวซิวเกลี้ยงเมืองเลย1",
    commonName: "Siwgleang Mueang Loei Sticky Rice หรือ Khao NeawSiwgleang Mueang Loei",
    scientificName: "Oryza sativa L",
    family: "Poaceae",
    order: "Poales",
    class: " Liliopsida",
    phylum: "Magnoliophyta",
    history: " ที่มาและชื่อพันธุ์ข้าวเหนียวซิวเกลี้ยง มีถิ่นกำเนิดอยู่จังหวัดเลยเป็นสายพันธุ์ข้าวไร่พื้นเมืองของจังหวัดเลยที่ปลูกสืบทอดมาจากบรรพบุรุษยายนานกว่า200 ปี ประกอบกับจังหวัดเลยมีสภาพภูมิประเทศเป็นพื้นที่ภูเขาและเนินเขา มีเทือกเขายาวโดยมีที่ราบลุ่มระหว่างหุบเขาสลับอยู่ระหว่างแนวเทือกเขาจึงนิยมปลูกข้าวไร่เป็นหลักซึ่งข้าวเหนียวพันธุ์ซิวเกลี้ยงเป็นสายพันธุ์ที่เกษตรกรนิยมปลูกกันมากกว่าพันธุ์อื่นๆ เพราะมีลักษณะเด่นคือมีอัตราการงอกสูงที่สุดเมื่อเทียบกับพันธุ์อื่นๆมีความทนทานต่อความแห้งแล้งโรคและแมลงศัตรูพืชให้ผลผลิตดีและมีปริมาณมากกว่าข้าวไร่พันธุ์พื้นเมืองอื่นๆจากคำบอกเล่าของคนท้องถิ่นในอำเภอด่านซ้ายให้ข้อมูลว่าข้าวเหนียวซิวเกลี้ยง มีชื่อเดิมเรียกว่า ซิวอ้าว (ซิวแปลว่า เล็ก)ต่อมามีการเรียกชื่อใหม่ว่า “ซิวเกลี้ยง”ตามลักษณะของเมล็ดข้าวที่ไม่มีขน โดยข้าวเหนียวซิวเกลี้ยงเมืองเลยมีลักษณะเด่นคือ ส่วนปลายเมล็ดข้าวเปลือกมีจุดสีน้ำตาลและเมื่อหุงสุกเมล็ดข้าวจะสวย มีกลิ่นหอมเล็กน้อย เหนียว นุ่ม อร่อย ซึ่งแตกต่างจากการปลูกในบริเวณพื้นที่ราบที่ปลายเมล็ดข้าวเปลือกไม่มีสีน้ำตาล              ต่อมาเมื่อปี พ.ศ. 2543 ได้มีการรวมกลุ่มเกษตรกรในพื้นที่บ้านน้ำเย็นจัดตั้งวิสาหกิจชุมชนกลุ่มผลิตเมล็ดพันธุ์ข้าวไร่บ้านน้ำเย็นเพื่ออนุรักษ์พันธุ์ข้าวไร่พื้นเมืองหลายสายพันธุ์รวมถึงข้าวเหนียวซิวเกลี้ยงด้วยโดยในภายหลังได้มีการนำกลับมาปลูกอย่างแพร่หลาย ตั้งแต่ปี พ.ศ. 2543 และได้มีกิจกรรมส่งเสริมการปลูกข้าวไร่เพื่อการท่องเที่ยว เช่น การจัดกิจกรรมวันข้าวไร่การจัดงานวันถ่ายทอดเทคโนโลยีเพื่อเริ่มต้นฤดูกาลผลิตใหม่ เป็นต้นซึ่งจัดโดยสำนักงานเกษตรจังหวัดเลย สำนักงานเกษตรอำเภอด่านซ้ายและองค์การบริหารส่วนตำบลกกสะทอน อำเภอด่านซ้าย จังหวัดเลย",
    general: "ข้าวเหนียวซิวเกลี้ยงเมืองเลยเป็นข้าวไร่พันธุ์พื้นเมืองที่ไวต่อช่วงแสง ปลูกในช่วงฤดูฝนในพื้นที่ดอน เนินเขา ที่ราบลอนคลื่น และพื้นที่ราบระหว่างภูเขาที่ระดับความสูง 500 – 1,000 เมตร จากระดับน้ำทะเลเมล็ดรูปร่างเรียวยาว ข้าวเปลือกมีสีฟาง ไม่มีขนส่วนปลายเมล็ดมีจุดสีน้ำตาล เมื่อหุงสุกเมล็ดสวย เหนียวนุ่มและมีกลิ่นหอมเล็กน้อย หลังจากหุงเป็นเวลานานยังคงความนุ่มไว้ได้ปลูกมากในพื้นที่อำเภอด่านซ้าย อำเภอภูเรือ และอำเภอนาแห้ว",
    agricultural: "ความสูงของต้นกล้าเฉลี่ย 49.90 เซนติเมตร, ลำต้นยาวเฉลี่ย 61.21 เซนติเมตร, ความยาวของรวงเฉลี่ย 17.65 เซนติเมตร, จำนวน 1 หน่อต่อกอ,การชูรวงเหนือใบธงชูรวงดีมาก, อายุวันออกดอก 75-78 วัน,ลำต้นแข็งแรงปานกลาง, มีการติดเมล็ด 90%, การร่วงของเมล็ดน้อยและน้ำหนัก 100 เมล็ด 3.15 กรัม",
    botanical: " แผ่นใบสีเขียวมีขนบ้างเล็กน้อย, กาบใบมีสีเขียว,มุมของยอดแผ่นใบตั้งตรง, สีของลิ้นใบ (เยื่อกั้นน้ำฝน),มีสีขาวรูปร่างแหลม, มีความยาวยาวเฉลี่ย 13.80 มิลลิเมตร,หูใบมีสีขาว, สีของข้อต่อใบกับกาบใบเขียว, สีของปล้องสีเขียว,กอตั้ง, มุมของใบธงหักลง, มุมหรือลักษณะกอตั้งตรงสีของปล้องด้านนอกมีสีเขียว, ไม่มีการแตกระแง้, ลักษณะรวงกระจายปานกลาง, ก้านรวงตั้งตรง, การแก่ของใบปานกลางและการแห้งของใบใต้ใบธงแห้งช้า",
    Seeds: "เปลือกของเมล็ดสีฟางไม่มีขน, ไม่มีหางข้าว, ยอดเมล็ดมีสีฟาง,ข้าวกล้องสีขาว,รูปร่างเรียว, ความยาวของเมล็ดข้าวเปลือกเฉลี่ย 10.33 มิลลิเมตร และความกว้างของเมล็ดข้าวเปลือกเฉลี่ย 3.47 มิลลิเมตร",
    requestNumber: "1101",
    registrationNumber: "123",
    requestDate: "2025-03-21",
    registrationDate: "2025-03-21",
    category: "Fruits",
    latitude: "",
    longitude: "",
    imge:[]
  }
]
const Detail = ({ id }) => {
  // ค้นหาสินค้าที่ตรงกับ id ที่ได้รับ
  const productItem = product.find((item) => item.id === id);

  // หากไม่พบ id ที่ตรงกัน
  if (!productItem) {
    return (
      <div className="container text-center">
        <h1>ไม่พบสินค้า</h1>
        <p>กรุณาตรวจสอบข้อมูลอีกครั้ง</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {/* Header Section */}
        <div
          className="container-fluid bg-dark d-flex flex-column align-items-center justify-content-center"
          style={{
            height: "70vh",
            backgroundColor: "#333", // สีพื้นหลังที่คุณต้องการ
            padding: "20px",
          }}
        >
          <div
            className="text-light d-flex flex-column align-items-center justify-content-center"
            style={{ height: "65vh", width: "80vh" }}
          >
            <h1 className="display-3 text-center" style={{ fontSize: "3rem" }}>
              {productItem.name} {productItem.id}
            </h1>
            <p className="fs-4 text-center" style={{ fontSize: "1.5rem" }}>
              หลักสูตรอบรม
              <br />
              สำหรับผู้ที่สนใจเรียนรู้เกี่ยวกับ {productItem.name}
            </p>
          </div>
        </div>
        {/* Main Content Section */}
        <div className="d-flex justify-content-center align-content-center mt-5 px-3">
          <div
            className="d-flex flex-column"
            style={{
              width: "80%",
              maxWidth: "1200px",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 className="mb-4" style={{ fontSize: "2rem" }}>
              {productItem.name}
            </h1>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>ชื่อสามัญ :</strong> {productItem.commonName}
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>ชื่อวิทยาศาสตร์ :</strong> {productItem.scientificName}
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>ชื่อวงศ์ :</strong> {productItem.family}
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>อันดับ :</strong> {productItem.order}
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>ชั้น :</strong> {productItem.class}
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              <strong>ไฟลัม :</strong> {productItem.phylum}
            </p>
            {/* ข้อมูลการขึ้นทะเบียน */}
            <h2 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ข้อมูลการขึ้นทะเบียน
            </h2>
            <p style={{ fontSize: "1.25rem" }}>{productItem.history}</p>

            {/* History Section */}
            <h2 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ประวัติความเป็นมา
            </h2>
            <p style={{ fontSize: "1.25rem" }}>{productItem.history}</p>

            {/* General Description Section */}
            <h3 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ลักษณะทั่วไป
            </h3>
            <p style={{ fontSize: "1.25rem" }}>{productItem.general}</p>

            {/* Agricultural Characteristics Section */}
            <h3 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ลักษณะทางการเกษตร
            </h3>
            <p style={{ fontSize: "1.25rem" }}>{productItem.agricultural}</p>

            {/* Botanical Characteristics Section */}
            <h3 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ลักษณะทางพฤกษศาสตร์
            </h3>
            <p style={{ fontSize: "1.25rem" }}>{productItem.botanical}</p>

            {/* Physical Characteristics of Seeds Section */}
            <h3 className="mt-5 mb-3" style={{ fontSize: "1.75rem" }}>
              ลักษณะทางกายภาพของเมล็ด
            </h3>
            <p style={{ fontSize: "1.25rem" }}>{productItem.Seeds}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
