export const SERVICES = [
  { text: "Varicose Veins", value: "Varicose Veins" },
  { text: "Gonadal Vein Disease", value: "Gonadal Vein Disease" },
  { text: "Peripheral Artery Disease (PAD)", value: "Peripheral Artery Disease (PAD)" },
  { text: "Amputation Surgery", value: "Amputation Surgery" },
  { text: "Chronic Venous Insufficiency", value: "Chronic Venous Insufficiency" },
  { text: "AV Fistula", value: "AV Fistula" },
  { text: "Advanced Limb Salvage", value: "Advanced Limb Salvage" },
  { text: "Deep Vein Thrombosis", value: "Deep Vein Thrombosis" },
  { text: "Lymphatic Care", value: "Lymphatic Care" },
  { text: "Dialysis Access", value: "Dialysis Access" },
  { text: "Diabetic Foot", value: "Diabetic Foot" },
  { text: "Pulmonary Embolism", value: "Pulmonary Embolism" },
  { text: "Pelvic Venous Disorders", value: "Pelvic Venous Disorders" },
  { text: "Central Venous Care", value: "Central Venous Care" },
  { text: "Wound Care", value: "Wound Care" },
  { text: "Abdominal Aortic Aneurysm", value: "Abdominal Aortic Aneurysm" },
] as const;

// Optional type safety
export type ServiceType = (typeof SERVICES)[number]["value"];