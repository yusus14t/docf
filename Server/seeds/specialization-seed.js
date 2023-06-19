let specialization = {
  data: [
    {
      id: "PUMONOLOGIST",
      name: "Punomologist",
      description: `Pulmonology, a medical speciality devoted to the study and treatment of disorders affecting the respiratory system, is vital to the health and well-being of people all over the world. Any disturbance in the lungs' ability to perform their essential functions of exchanging oxygen and removing carbon dioxide might have a negative impact on one's general health. In the fight against respiratory disorders, pulmonologists are vital medical specialists as they are capable of recognising and treating a variety of respiratory ailments.
                    The diagnosis and treatment of lung cancer, asthma, pneumonia, chronic obstructive pulmonary disease (COPD), and sleep disorders like sleep apnoea are only a few of the conditions covered by the speciality of pulmonology. These experts have an in-depth understanding of the intricate anatomy and physiology of the respiratory system, which enables them to recognise and efficiently treat respiratory diseases.
                    One of the primary responsibilities of pulmonologists is the diagnosis and treatment of lung conditions. Pulmonologists can determine the underlying cause of a patient's respiratory symptoms by a mix of physical examinations, medical history reviews, and diagnostic testing like spirometry, chest X-rays, and computed tomography (CT) scans. They collaborate closely with patients to create individualised treatment regimens after a diagnosis is made, which may involve medication, dietary changes, pulmonary rehabilitation, or surgery.
                    Pulmonologists also play a vital role in the prevention and early detection of lung cancer, one of the leading causes of cancer-related deaths worldwide. They employ various screening techniques, such as low-dose CT scans, to detect lung cancer in its early stages when treatment outcomes are more favourable. Additionally, pulmonologists work collaboratively with thoracic surgeons, radiation oncologists, and medical oncologists to provide comprehensive care for individuals diagnosed with lung cancer. Pulmonologists assess patients for sleep disorders, conduct sleep studies, and prescribe appropriate treatments, including continuous positive airway pressure (CPAP) therapy, to ensure adequate sleep and improve respiratory function.`,
    },

    {
      id: "HEPATOLOGIST",
      name: "Hepatologist",
      description: "",
    },
    {
      id: "NEPHROLOGIST ",
      name: "Nephrologist",
      description: "",
    },
    {
      id: "DERMATOLOGIST ",
      name: "Dermatologist",
      description: "",
    },
    {
      id: "ENDOCRINOLOGIST",
      name: "Endocrinnologist",
      description: "",
    },
    {
      id: "UROLOGIST",
      name: "Urologist",
      description: "",
    },
    {
      id: "GENERAL-PHYSICIAN ",
      name: "General Physician",
      description: "",
    },
    {
      id: "RADIOCOLOGIST",
      name: "Radiologist",
      description: "",
    },
    {
      id: "ORTHOPEDIC ",
      name: "Orthophedic",
      description: "",
    },
    {
      id: "PAEDIATRICIAN",
      name: "Paediatrician",
      description: "",
    },
    {
      id: "RHEUMATOLOGISTS",
      name: "Rheumatologist",
      description: "",
    },
    {
      id: "CARDIOLOGIST",
      name: "Cardiologist",
      description: "",
    },
    {
      id: "NEUROLOGIST",
      name: "Neurologist",
      description: "",
    },
    {
      id: "GYNEOCOLOGIST",
      name: "Gyneoclogist",
      description: `A medical speciality devoted to providing comprehensive care for women's reproductive health is Gynaecology. Gynaecologists play a vital role in the diagnosis and treatment of a variety of diseases that affect the female reproductive system. Gynaecologists offer indispensable medical knowledge and support to women throughout their lives, from menstruation issues to pregnancy-related care and gynaecological cancers.
      Menstrual health is one of the main areas on which gynaecologists concentrate. They offer appropriate medical measures and individualized treatment programmes to assist women in managing irregular periods, heavy bleeding, and excruciating cramps. Gynaecologists help their patients feel physically comfortable and emotionally well-adjusted by addressing menstrual issues.
      Moreover, gynaecologists are also indulged in the field of contraception by offering guidance on various birth control methods (contraceptives) to suit individual needs and lifestyles. Educating women about different alternatives, including birth control pills, patches, injections, implants, and intrauterine devices (IUDs). This results in informed decision-making about contraception and family planning. 
      Gynaecologists offer vital prenatal care when it comes to pregnancy. They keep an eye on the well-being of expectant moms, conduct routine check-ups, and provide support during the various phases of pregnancy. Gynaecologists also perform ultrasounds and other important tests to make sure both the mother and the unborn child are healthy.
      They play a crucial role in identifying and treating the underlying causes of infertility. They use a variety of methods, including in vitro fertilisation (IVF), hormone treatments, and fertility pills and drugs. Gynaecologists work alongside fertility specialists to offer complete care to couples who are having trouble getting pregnant.
      In addition, gynaecologists are pioneers in the detection, diagnosis, and treatment of gynaecological cancers. To find cervical cancer early warning signals, they do routine screenings like Pap smears. Additionally, gynaecologists do biopsies, assess symptoms, and provide treatment choices for ovarian, uterine, and other gynaecological cancers.
      Gynaecology, which provides complete care and assistance, is crucial to women's reproductive health. Gynaecologists are committed to preserving the health of women throughout their lives, from resolving menstrual issues and offering contraception alternatives to managing pregnancies and diagnosing gynaecological cancers. It's essential to see a gynaecologist frequently to maintain reproductive health and catch any problems early.
      `,
    },
    {
      id: "ONCOLOGIST",
      name: "Oncologist",
      description: "",
    },
    {
      id: "OPHTHALMOLOGIST",
      name: "Ophthalmologist",
      description: "",
    },
    {
      id: "PSYCHIATRISTS",
      name: "Phsychiatrists",
      description: "",
    },
    {
      id: "IMMUNOLOGIST ",
      name: "Immunologist",
      description: "",
    },

    {
      id: "GASTROENTEROLOGIST",
      name: "Gastroenterologist",
      description: "",
    },
  ],
  function: async () => {
    await UserModel.deleteMany({});
    await UserModel.insertMany(specialization.data);
    console.log("Seeded Successfull.");
  },
};

module.exports = { specialization };
