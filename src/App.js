import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GiCheeseWedge,
  GiPeanut,
  GiMilkCarton,
  GiBigEgg,
  GiChicken,
  GiCirclingFish,
  GiFishBucket,
  GiFriedFish,
  GiFishCooked,
  GiCrabClaw,
  GiMeat,
  GiCrab,
  GiDuck,
  GiWheat,
  GiSeedling,
  GiMushroom,
} from "react-icons/gi";
import {
  IoRestaurant,
  IoLeaf,
  IoBarbell,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { FaFire, FaBolt, FaMedal, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";


const FOOD_ICONS = {
  paneer: GiCheeseWedge,
  chana: GiPeanut,
  moong: GiWheat,
  toor: GiWheat,
  rajmah: GiPeanut,
  soybean: GiSeedling,
  tofu: GiMushroom,
  peanut: GiPeanut,
  milk: GiMilkCarton,
  curd: GiMilkCarton,
  oats: GiWheat,
  sprouts: GiSeedling,
  dal: GiWheat,
  chanaDal: GiPeanut,
  uradDal: GiPeanut,
  almonds: GiPeanut,
  walnuts: GiPeanut,
  cheese: GiCheeseWedge,
  besan: GiWheat,
  lobia: GiPeanut,
  val: GiPeanut,
  egg: GiBigEgg,
  eggWhite: GiBigEgg,
  chicken: GiChicken,
  chickenThigh: GiChicken,
  fish: GiCirclingFish,
  fishSea: GiFishBucket,
  shrimp: GiCrabClaw,
  mutton: GiMeat,
  tuna: GiFriedFish,
  salmon: GiFishCooked,
  crab: GiCrab,
  duck: GiDuck,
};

const FOODS = [
  
  { id: "paneer", name: "Paneer", protein: 18, cal: 265, unit: "gm", type: "veg", desc: "Cottage cheese", category: "dairy", color: "#FFB347" },
  { id: "chana", name: "Chickpeas", protein: 19, cal: 164, unit: "gm", type: "veg", desc: "Kabuli Chana", category: "legumes", color: "#D4A574" },
  { id: "moong", name: "Moong Dal", protein: 24, cal: 347, unit: "gm", type: "veg", desc: "Green gram lentil", category: "legumes", color: "#98D8AA" },
  { id: "toor", name: "Toor Dal", protein: 22, cal: 343, unit: "gm", type: "veg", desc: "Pigeon pea lentil", category: "legumes", color: "#F4D03F" },
  { id: "rajmah", name: "Rajma", protein: 8.7, cal: 127, unit: "gm", type: "veg", desc: "Kidney beans", category: "legumes", color: "#C0392B" },
  { id: "soybean", name: "Soyabean", protein: 36, cal: 446, unit: "gm", type: "veg", desc: "Plant powerhouse", category: "legumes", color: "#8B7355" },
  { id: "tofu", name: "Tofu", protein: 8, cal: 76, unit: "gm", type: "veg", desc: "Soy curd", category: "soy", color: "#F5F5DC" },
  { id: "peanut", name: "Peanuts", protein: 26, cal: 567, unit: "gm", type: "veg", desc: "Groundnuts", category: "nuts", color: "#D4A574" },
  { id: "milk", name: "Milk", protein: 3.4, cal: 61, unit: "ml", type: "veg", desc: "Full cream", category: "dairy", color: "#F5F5F5" },
  { id: "curd", name: "Greek Yogurt", protein: 10, cal: 59, unit: "gm", type: "veg", desc: "High-protein curd", category: "dairy", color: "#F5F5DC" },
  { id: "oats", name: "Oats", protein: 13, cal: 389, unit: "gm", type: "veg", desc: "Whole grain", category: "grains", color: "#D4A574" },
  { id: "sprouts", name: "Sprouts", protein: 24, cal: 347, unit: "gm", type: "veg", desc: "Moong sprouts", category: "legumes", color: "#98D8AA" },
  { id: "dal", name: "Masoor Dal", protein: 9, cal: 116, unit: "gm", type: "veg", desc: "Red lentils", category: "legumes", color: "#E74C3C" },
  { id: "chanaDal", name: "Chana Dal", protein: 8, cal: 120, unit: "gm", type: "veg", desc: "Split chickpeas", category: "legumes", color: "#D4A574" },
  { id: "uradDal", name: "Urad Dal", protein: 10, cal: 120, unit: "gm", type: "veg", desc: "Black gram", category: "legumes", color: "#2C3E50" },
  { id: "almonds", name: "Almonds", protein: 21, cal: 579, unit: "gm", type: "veg", desc: "Badam", category: "nuts", color: "#D4A574" },
  { id: "walnuts", name: "Walnuts", protein: 15, cal: 654, unit: "gm", type: "veg", desc: "Akhrot", category: "nuts", color: "#8B4513" },
  { id: "cheese", name: "Cheddar", protein: 25, cal: 402, unit: "gm", type: "veg", desc: "Cheese cubes", category: "dairy", color: "#FFB347" },
  { id: "besan", name: "Besan", protein: 20, cal: 387, unit: "gm", type: "veg", desc: "Gram flour", category: "legumes", color: "#D4A574" },
  { id: "lobia", name: "Lobia", protein: 8, cal: 116, unit: "gm", type: "veg", desc: "Black eyed peas", category: "legumes", color: "#2C3E50" },
  
  
  { id: "egg", name: "Whole Egg", protein: 6.3, cal: 78, unit: "nos", type: "nonveg", desc: "~6.3g per egg", isEgg: true, category: "egg", color: "#F5DEB3" },
  { id: "eggWhite", name: "Egg Whites", protein: 11, cal: 52, unit: "gm", type: "nonveg", desc: "Pure protein", category: "egg", color: "#F5F5F5" },
  { id: "chicken", name: "Chicken Breast", protein: 31, cal: 165, unit: "gm", type: "nonveg", desc: "Lean chicken", category: "poultry", color: "#DEB887" },
  { id: "chickenThigh", name: "Chicken Thigh", protein: 26, cal: 209, unit: "gm", type: "nonveg", desc: "With skin", category: "poultry", color: "#D2691E" },
  { id: "fish", name: "Fish (Rohu)", protein: 17, cal: 97, unit: "gm", type: "nonveg", desc: "River fish", category: "fish", color: "#87CEEB" },
  { id: "fishSea", name: "Fish (Pomfret)", protein: 19, cal: 92, unit: "gm", type: "nonveg", desc: "Sea fish", category: "fish", color: "#B0C4DE" },
  { id: "shrimp", name: "Prawns", protein: 24, cal: 99, unit: "gm", type: "nonveg", desc: "Jhinga", category: "seafood", color: "#FFA07A" },
  { id: "mutton", name: "Mutton", protein: 25, cal: 294, unit: "gm", type: "nonveg", desc: "Goat meat", category: "meat", color: "#8B0000" },
  { id: "tuna", name: "Tuna", protein: 29, cal: 132, unit: "gm", type: "nonveg", desc: "Canned tuna", category: "fish", color: "#4682B4" },
  { id: "salmon", name: "Salmon", protein: 20, cal: 208, unit: "gm", type: "nonveg", desc: "Omega-3 rich", category: "fish", color: "#FA8072" },
  { id: "crab", name: "Crab Meat", protein: 18, cal: 87, unit: "gm", type: "nonveg", desc: "Crab", category: "seafood", color: "#CD5C5C" },
  { id: "duck", name: "Duck", protein: 19, cal: 337, unit: "gm", type: "nonveg", desc: "Duck meat", category: "poultry", color: "#8B4513" },
];

const ACTIVITY = [
  { key: "sedentary", label: "Light", mult: 0.8, icon: IoRestaurant, desc: "Desk job", color: "#95A5A6" },
  { key: "moderate", label: "Moderate", mult: 1.0, icon: FaBolt, desc: "3-4x/week", color: "#3498DB" },
  { key: "active", label: "Active", mult: 1.2, icon: FaFire, desc: "Daily exercise", color: "#E67E22" },
  { key: "athlete", label: "Intense", mult: 1.6, icon: FaMedal, desc: "Heavy training", color: "#E74C3C" },
];

function calcAmount(food, protein) {
  if (food.isEgg) return Math.ceil(protein / food.protein);
  return Math.round((protein / food.protein) * 100);
}

function calcCalories(food, protein) {
  if (food.isEgg) return Math.round(calcAmount(food, protein) * food.cal);
  const grams = (protein / food.protein) * 100;
  return Math.round((grams / 100) * food.cal);
}

function fmt(food, protein) {
  const a = calcAmount(food, protein);
  if (food.isEgg) return a;
  if (a >= 1000) return `${(a / 1000).toFixed(1)}kg`;
  return `${a}`;
}

function unitLabel(food, protein) {
  if (food.isEgg) return calcAmount(food, protein) === 1 ? "egg" : "eggs";
  return food.unit;
}


const C = {
  bg: "#FFF6ED",
  bgGradient: "linear-gradient(135deg, #FFF6ED 0%, #FFEED9 50%, #FFF3E4 100%)",
  card: "rgba(255,255,255,0.85)",
  cardBorder: "rgba(220,195,170,0.3)",
  brown: "#5C3D2E",
  brownLight: "#8B6E5A",
  brownMuted: "#B49A87",
  orange: "#E07B3C",
  orangeLight: "#FFF0E3",
  cream: "#FDF3E7",
  text: "#3E2B1E",
  textMuted: "#A08E7E",
  green: "#4CAF6A",
  greenLight: "#E8F5EA",
  red: "#E05B5B",
  redLight: "#FFEBEE",
  shadow: "0 10px 40px rgba(92,61,46,0.1)",
  shadowHover: "0 20px 60px rgba(92,61,46,0.15)",
};

function FoodIcon({ food, size = 36 }) {
  const IconComponent = FOOD_ICONS[food.id];
  if (!IconComponent) return <span style={{ fontSize: size }}>?</span>;
  
  return (
    <div
      style={{
        width: size + 16,
        height: size + 16,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${food.color}22, ${food.color}44)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent
        size={size}
        style={{ color: food.color || C.brown }}
      />
    </div>
  );
}

function Logo() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        background: "linear-gradient(135deg, #F5A623, #E07B3C)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(224,123,60,0.35)",
      }}
    >
      <BiDumbbell size={28} color="white" />
    </motion.div>
  );
}

function FoodCard({ food, protein, index }) {
  const amount = fmt(food, protein);
  const unit = unitLabel(food, protein);
  const active = protein > 0;
  const isVeg = food.type === "veg";
  const calories = active ? calcCalories(food, protein) : 0;
  const calDisplay = calories >= 1000 ? `${(calories / 1000).toFixed(1)}k` : calories;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      style={{
        background: C.card,
        backdropFilter: "blur(12px)",
        borderRadius: 20,
        padding: "20px 16px 16px",
        textAlign: "center",
        position: "relative",
        border: `1px solid ${C.cardBorder}`,
        boxShadow: C.shadow,
        cursor: "default",
      }}
    >
      {}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.03 + 0.1 }}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: isVeg ? C.greenLight : C.redLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isVeg ? (
          <IoLeaf size={12} color={C.green} />
        ) : (
          <IoRestaurant size={12} color={C.red} />
        )}
      </motion.div>

      {}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
        style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}
      >
        <FoodIcon food={food} size={32} />
      </motion.div>

      {}
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: C.brown,
          marginBottom: 2,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {food.name}
      </div>

      {}
      <div
        style={{
          fontSize: 10,
          color: C.brownMuted,
          marginBottom: 12,
        }}
      >
        {food.protein}g / {food.isEgg ? "egg" : `100${food.unit}`}
      </div>

      {}
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key="active"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              background: `linear-gradient(135deg, ${C.orangeLight}, #FFE8D6)`,
              borderRadius: 14,
              padding: "10px 8px 8px",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: C.orange,
                lineHeight: 1.1,
              }}
            >
              {amount}
            </div>
            <div
              style={{
                fontSize: 10,
                color: C.brownMuted,
                marginTop: 2,
                fontWeight: 500,
              }}
            >
              {unit} / day
            </div>
            <div
              style={{
                fontSize: 9,
                color: C.brownMuted,
                marginTop: 3,
                fontWeight: 500,
                opacity: 0.7,
              }}
            >
              ~{calDisplay} kcal
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: "8px 0" }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#e0d5ca",
                lineHeight: 1,
              }}
            >
              --
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WhatTheWhey() {
  const [weight, setWeight] = useState(() => {
    const saved = localStorage.getItem("wtw_weight");
    return saved || "";
  });
  const [unitSys, setUnitSys] = useState(() => {
    const saved = localStorage.getItem("wtw_unit");
    return saved || "kg";
  });
  const [activity, setActivity] = useState(() => {
    const saved = localStorage.getItem("wtw_activity");
    const validActivity = ACTIVITY.find((a) => a.key === saved);
    return validActivity ? saved : "moderate";
  });
  const [filter, setFilter] = useState("all");
  const [activityKey, setActivityKey] = useState(0);

  
  useEffect(() => {
    localStorage.setItem("wtw_weight", weight);
  }, [weight]);

  useEffect(() => {
    localStorage.setItem("wtw_unit", unitSys);
  }, [unitSys]);

  useEffect(() => {
    localStorage.setItem("wtw_activity", activity);
  }, [activity]);

  const wKg = unitSys === "kg" ? Number(weight) : Number(weight) * 0.4536;
  const mult = ACTIVITY.find((a) => a.key === activity).mult;
  const proteinNeeded = wKg > 0 ? Math.round(wKg * mult) : 0;
  const filtered = filter === "all" ? FOODS : FOODS.filter((f) => f.type === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bgGradient,
        fontFamily: "'DM Sans', sans-serif",
        color: C.text,
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
        
        .weight-input::placeholder { color: #ddd0c3; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${C.cream}; }
        ::-webkit-scrollbar-thumb { background: ${C.brownMuted}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.brownLight}; }
        
        @media (max-width: 640px) {
          .activity-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .food-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .input-row { flex-direction: column !important; }
        }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        {}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ paddingTop: 48, paddingBottom: 8 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <Logo />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h1
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 34,
                    fontWeight: 400,
                    color: C.brown,
                    letterSpacing: "-0.01em",
                  }}
                >
                  What The Whey
                </h1>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  style={{ fontSize: 28 }}
                >
                  <BiDumbbell color={C.orange} />
                </motion.span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: C.brownMuted,
                  fontWeight: 400,
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                Plan your protein, one meal at a time
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 15,
              color: C.brownLight,
              lineHeight: 1.7,
              maxWidth: 520,
              marginTop: 18,
            }}
          >
            Know exactly how much of each ingredient you need daily. Once you see the numbers,
            planning your meals becomes a breeze.
          </p>
        </motion.header>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginTop: 28 }}
        >
          <div
            className="input-row"
            style={{ display: "flex", gap: 16, alignItems: "stretch", flexWrap: "wrap" }}
          >
            {}
            <motion.div
              whileHover={{ scale: 1.01 }}
              style={{
                background: C.card,
                backdropFilter: "blur(12px)",
                borderRadius: 20,
                padding: "20px 24px",
                border: `1px solid ${C.cardBorder}`,
                flex: "1 1 240px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxShadow: C.shadow,
              }}
            >
              <label
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.brownMuted,
                }}
              >
                Your Weight
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input
                  className="weight-input"
                  type="number"
                  min="20"
                  max="300"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  aria-label="Enter your weight"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 44,
                    fontWeight: 700,
                    color: C.brown,
                    border: "none",
                    outline: "none",
                    width: "100%",
                    background: "transparent",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    background: C.cream,
                    borderRadius: 14,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {["kg", "lbs"].map((u) => (
                    <motion.button
                      key={u}
                      onClick={() => setUnitSys(u)}
                      whileTap={{ scale: 0.95 }}
                      aria-pressed={unitSys === u}
                      aria-label={`Show weight in ${u}`}
                      style={{
                        padding: "10px 18px",
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                        border: "none",
                        cursor: "pointer",
                        background: unitSys === u ? C.brown : "transparent",
                        color: unitSys === u ? "#fff" : C.brownMuted,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {u}
                    </motion.button>
                  ))}
                </div>
              </div>
              {weight && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setWeight("")}
                  aria-label="Clear weight"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: 4,
                    fontSize: 11,
                    color: C.brownMuted,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    textDecoration: "underline",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Clear
                </motion.button>
              )}
            </motion.div>

            {}
            <motion.div
              whileHover={{ scale: 1.01 }}
              style={{
                background: C.card,
                backdropFilter: "blur(12px)",
                borderRadius: 20,
                padding: "20px 24px",
                border: `1px solid ${C.cardBorder}`,
                flex: "1.5 1 360px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxShadow: C.shadow,
              }}
            >
              <label
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.brownMuted,
                }}
              >
                Activity Level
              </label>
              <div
                className="activity-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 10,
                }}
              >
                {ACTIVITY.map((a) => {
                  const IconComponent = a.icon;
                  const isSelected = activity === a.key;
                  return (
                    <motion.button
                      key={a.key}
                      onClick={() => {
                        setActivity(a.key);
                        setActivityKey(prev => prev + 1);
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      aria-pressed={isSelected}
                      aria-label={`Activity level: ${a.label} - ${a.desc}`}
                      style={{
                        padding: "14px 8px 10px",
                        borderRadius: 16,
                        border: isSelected ? `2px solid ${a.color}` : `1.5px solid ${C.cardBorder}`,
                        background: isSelected ? `${a.color}15` : C.card,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s ease",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <motion.div
                        animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        style={{ marginBottom: 4 }}
                      >
                        <IconComponent size={22} color={isSelected ? a.color : C.brownMuted} />
                      </motion.div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: isSelected ? a.color : C.brown,
                        }}
                      >
                        {a.label}
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          color: isSelected ? C.brownMuted : "#c4b5a3",
                          marginTop: 2,
                        }}
                      >
                        {a.desc}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {}
        <AnimatePresence>
          {proteinNeeded > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              style={{
                marginTop: 16,
                background: C.card,
                backdropFilter: "blur(12px)",
                borderRadius: 18,
                padding: "18px 24px",
                border: `1px solid ${C.cardBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
                boxShadow: C.shadow,
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <IoBarbell size={24} color={C.orange} />
              </motion.div>
              <span style={{ fontSize: 15, color: C.brownLight, fontWeight: 500 }}>
                Your daily protein target is
              </span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 36,
                  fontWeight: 400,
                  color: C.orange,
                }}
              >
                {proteinNeeded}g
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: 36 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 24,
                fontWeight: 400,
                color: C.brown,
              }}
            >
              Pick Your Protein Sources
            </h2>
            <div
              style={{
                display: "flex",
                background: C.card,
                borderRadius: 14,
                border: `1px solid ${C.cardBorder}`,
                overflow: "hidden",
                boxShadow: C.shadow,
              }}
            >
              {[
                { key: "all", label: "All", icon: IoRestaurant, color: C.brown },
                { key: "veg", label: "Veg", icon: IoLeaf, color: C.green },
                { key: "nonveg", label: "Non-Veg", icon: GiChicken, color: C.orange },
              ].map((f, i) => {
                const IconComponent = f.icon;
                const isSelected = filter === f.key;
                return (
                  <motion.button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    whileTap={{ scale: 0.95 }}
                    aria-pressed={isSelected}
                    aria-label={`Show ${f.label} foods`}
                    style={{
                      padding: "10px 18px",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "'DM Sans', sans-serif",
                      border: "none",
                      cursor: "pointer",
                      background: isSelected
                        ? f.key === "veg"
                          ? C.greenLight
                          : f.key === "nonveg"
                          ? C.orangeLight
                          : C.cream
                        : "transparent",
                      color: isSelected ? f.color : C.brownMuted,
                      transition: "all 0.2s ease",
                      borderRight: i < 2 ? `1px solid ${C.cardBorder}` : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <IconComponent size={16} color={isSelected ? f.color : C.brownMuted} />
                    {f.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "veg") && (
              <motion.div
                key="veg-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filter === "all" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 14,
                      marginTop: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: C.green,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: C.green,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Vegetarian
                    </span>
                    <div style={{ flex: 1, height: 1, background: "rgba(76,175,106,0.15)" }} />
                  </div>
                )}
                <div
                  className="food-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: 14,
                  }}
                >
                  {filtered
                    .filter((f) => f.type === "veg")
                    .map((food, i) => (
                      <FoodCard key={food.id} food={food} protein={proteinNeeded} index={i} />
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "nonveg") && (
              <motion.div
                key="nonveg-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filter === "all" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 14,
                      marginTop: 28,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: C.red,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: C.red,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Non-Vegetarian
                    </span>
                    <div style={{ flex: 1, height: 1, background: "rgba(224,91,91,0.15)" }} />
                  </div>
                )}
                <div
                  className="food-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: 14,
                  }}
                >
                  {filtered
                    .filter((f) => f.type === "nonveg")
                    .map((food, i) => (
                      <FoodCard key={food.id} food={food} protein={proteinNeeded} index={i} />
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 40, paddingBottom: 48 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              background: C.card,
              backdropFilter: "blur(12px)",
              borderRadius: 20,
              padding: "22px 24px",
              border: `1px solid ${C.cardBorder}`,
              boxShadow: C.shadow,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                style={{ fontSize: 24, lineHeight: 1, flexShrink: 0, marginTop: 2 }}
              >
                <IoCheckmarkCircle color={C.green} size={24} />
              </motion.div>
              <div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: C.brown,
                    marginBottom: 8,
                  }}
                >
                  How to use this
                </h3>
                <p style={{ fontSize: 13, color: C.brownLight, lineHeight: 1.8 }}>
                  Each card shows how much of that <em>one</em> food covers your full daily protein.
                  In reality, mix sources - two eggs for breakfast, dal for lunch, paneer for dinner -
                  and the numbers add up naturally. Use these as building blocks to plan your meals.
                </p>
              </div>
            </div>
          </motion.div>

          <p
            style={{
              marginTop: 20,
              fontSize: 11,
              color: C.brownMuted,
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            Based on RDA guidelines ({mult}g protein / kg body weight). Consult a nutritionist for
            personalized advice.
          </p>

          {}
          <footer
            style={{
              marginTop: 28,
              paddingTop: 20,
              borderTop: `1px solid ${C.cardBorder}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <motion.a
                href="https://github.com/Ankitmohanty2/what-the-whey"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: C.card,
                  border: `1px solid ${C.cardBorder}`,
                  color: C.brown,
                  textDecoration: "none",
                  boxShadow: C.shadow,
                }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: C.card,
                  border: `1px solid ${C.cardBorder}`,
                  color: C.brown,
                  textDecoration: "none",
                  boxShadow: C.shadow,
                }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: C.card,
                  border: `1px solid ${C.cardBorder}`,
                  color: C.brown,
                  textDecoration: "none",
                  boxShadow: C.shadow,
                }}
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 11,
                color: C.brownMuted,
              }}
            >
              Made with by <strong style={{ color: C.brownLight }}>Ankit</strong>
            </div>
            <p
              style={{
                marginTop: 10,
                fontSize: 10,
                color: C.brownMuted,
                textAlign: "center",
                opacity: 0.7,
              }}
            >
              2026 What The Whey. All rights reserved.
            </p>
          </footer>
        </motion.section>
      </div>
    </div>
  );
}
