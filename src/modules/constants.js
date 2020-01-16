const CONSTANTS = (function() {
  /**
   * Material icons used throughout the project
   */
  const Icon = {
    CALENDAR: "calendar_today",
    CANCEL: "cancel",
    INCLINE: "signal_cellular_null",
    INTENSITY: "whatshot",
    MAXIMUM: "priority_high",
    NOTES: "assignment",
    RESISTENCE: "fitness_center",
    REST: "hourglass_empty",
    TEMPO: "speed",
    TIMER: "timer"
  }

  /**
   * Categories for exercises
   */
  const Category = {
    BACK: "Back",
    BICEPS: "Biceps",
    CARDIO: "Cardio",
    CHEST: "Chest",
    CORE: "Core",
    EVENT: "Event",
    LEGS: "Legs",
    MISC: "Miscellaneous",
    SHOULDERS: "Shoudlers",
    TRICEPS: "Triceps"
  }

  /**
   * All available exercises
   * @todo IDs are Hard coded to prevent issues with local storage ATM
   */
  const Exercise = {
    // CARDIO ------------------------------------------------------------------
    MISC_CARDIO: {
      id: "cardio_001", 
      name: "Miscellaneous Cardio",
      category: Category.CARDIO,
      notes: "For miscellaneous cardio exercises."
    },
    ELLIPTICAL: {
      id: "cardio_002",
      name: "Elliptical",
      category: Category.CARDIO,
      notes: "Aim for 2 miles in 20 to 30 minutes. Adjust resistance and incline settings to maintain that goal."
    },
    STAIR_STEPPER: {
      id: "cardio_003",
      name: "Stair Stepper",
      category: Category.CARDIO,
      notes: "Use for 20 to 30 minutes. Adjust speed in an effort to keep heart rate above 140 bpm."
    },
    TREADMILL: {
      id: "cardio_004",
      name: "Treadmill",
      category: Category.CARDIO,
      notes: "Aim for 2 miles in 20 to 30 minutes. Adjust incline setting to maintain that goal."
    },
    // MISC --------------------------------------------------------------------
    MISC_EXERCISE: {
      id: "misc_001",
      name: "Miscellaneous Exercise",
      category: Category.MISC,
      notes: "For miscellaneous general exercises."
    },
    STRETCHING: {
      id: "misc_002",
      name: "Stretching",
      category: Category.MISC,
      notes: "Aim for 5 to 10 minutes of stretching with a focus on recently used muscle groups."
    },
    // CHEST -------------------------------------------------------------------
    FLAT_TNG_PRESS: {
      id: "chest_001",
      name: "Flat TNG Bench Press",
      category: Category.CHEST,
      notes: "Touch-and-go style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    INCLINE_TNG_PRESS: {
      id: "chest_002",
      name: "Incline TNG Bench Press",
      category: Category.CHEST,
      notes: "Touch-and-go style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    DECLINE_TNG_PRESS: {
      id: "chest_003",
      name: "Decline TNG Bench Press",
      category: Category.CHEST,
      notes: "Touch-and-go style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    FLAT_PIN_PRESS: {
      id: "chest_004",
      name: "Flat PIN Bench Press",
      category: Category.CHEST,
      notes: "Pin press style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    INCLINE_PIN_PRESS: {
      id: "chest_005",
      name: "Incline PIN Bench Press",
      category: Category.CHEST,
      notes: "Pin press style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    DECLINE_PIN_PRESS: {
      id: "chest_006",
      name: "Decline PIN Bench Press",
      category: Category.CHEST,
      notes: "Pin press style. Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    FLAT_DUMBBELL_PRESS: {
      id: "chest_007",
      name: "Flat Dumbell Press",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x8 with optional back-off final set."
    },
    INCLINE_DUMBBELL_PRESS: {
      id: "chest_008",
      name: "Incline Dumbell Press",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x8 with optional back-off final set."
    },
    DECLINE_DUMBBELL_PRESS: {
      id: "chest_009",
      name: "Decline Dumbell Press",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x8 with optional back-off final set."
    },
    FLY_MACHINE_CHEST: {
      id: "chest_010",
      name: "Fly Machine (Chest)",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x8 slowly."
    },
    LAYING_OVERHEAD_STRAIGHT_ARMS: {
      id: "chest_011",
      name: "Laying Overhead Straight Arms",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x10 slowly."
    },
    CABLE_CHEST_SIDE_PULLS: {
      id: "chest_012",
      name: "Cable Chest Side Pulls",
      category: Category.CHEST,
      notes: "Rest times of ~1 minute. Do ~5x10 slowly."
    },
    // SHOULDERS ---------------------------------------------------------------
    SIDE_RAISES: {
      id: "shoulders_001",
      name: "Weighted Side Raises",
      category: Category.SHOULDERS,
      notes: "Extend arms outward. Rest times of ~1 minute. Do ~5x10."
    },
    FRONT_RAISES: {
      id: "shoulders_002",
      name: "Weighted Front Raises",
      category: Category.SHOULDERS,
      notes: "Extend arms forward. Rest times of ~1 minute. Do ~5x10."
    },
    FRONT_SIDE_RAISES: {
      id: "shoulders_003",
      name: "Weighted Front and Side Raises",
      category: Category.SHOULDERS,
      notes: "Extend arms forward then outward. Rest times of ~1 minute. Do ~5x10."
    },
    SEATED_SHOULDER_PRESS: {
      id: "shoulders_004",
      name: "Seated Shoulder Press",
      category: Category.SHOULDERS,
      notes: "Rest times of ~1 minute. Do ~5x10."
    },
    // TRICEPS -----------------------------------------------------------------
    SKULL_CRUSHERS: {
      id: "triceps_001",
      name: "Skull Crushers",
      category: Category.TRICEPS,
      notes: "Lower weight behind head using elbows while laying down. Rest times of ~1 minute. Do ~5x10."
    },
    TRICEP_OVERHEAD_EXT: {
      id: "triceps_002",
      name: "Tricep Overhead Extension",
      category: Category.TRICEPS,
      notes: "Tricep overhead extension while standing or seated. Rest times of ~1 minute. Do ~5x10."
    },
    TRICEP_KICKBACKS: {
      id: "triceps_003",
      name: "Tricep Kickbacks",
      category: Category.TRICEPS,
      notes: "Rest times of ~1 minute. Do ~5x10 with optional AMRAP final set."
    },
    CABLE_TRICEP_PULLDOWNS: {
      id: "triceps_004",
      name: "Cable Tricep Pulldowns",
      category: Category.TRICEPS,
      notes: "Using any attachment. Rest times of ~1 minute. Do ~5x8 with optional AMRAP final set."
    },
    TRICEP_PRESS: {
      id: "triceps_005",
      name: "Tricep Press Machine",
      category: Category.TRICEPS,
      notes: "Rest times of ~1 minute. Do ~5x8 with optional AMRAP final set."
    },
    // BACK --------------------------------------------------------------------
    BENT_OVER_ROWS: {
      id: "back_001",
      name: "Bent Over Rows",
      category: Category.BACK,
      notes: "Remember to brace hard! Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    SHRUGS: {
      id: "back_002",
      name: "Shrugs",
      category: Category.BACK,
      notes: "Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    DEADLIFTS: {
      id: "back_003",
      name: "Deadlifts",
      category: Category.BACK,
      notes: "Remember to brace hard! Rest times of ~2 minutes. Do ~3-5x5 with optional back-off final set."
    },
    STIFF_LEG_DEADLIFTS: {
      id: "back_004",
      name: "Stiff Leg Deadlifts",
      category: Category.BACK,
      notes: "Remember to brace hard! Rest times of ~2 minutes. Do ~5x5 with optional back-off final set."
    },
    ASSISTED_PULL_UPS: {
      id: "back_005",
      name: "Assisted Pull-ups",
      category: Category.BACK,
      notes: "Rest times of ~1 minutes. Do ~5x10 with optional AMRAP final set."
    },
    SEATED_CABLE_PULLDOWNS: {
      id: "back_006",
      name: "Seated Cable Pulldowns",
      category: Category.BACK,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    SEATED_CABLE_ROWS: {
      id: "back_007",
      name: "Seated Cable Rows",
      category: Category.BACK,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    STANDING_T_ROWS: {
      id: "back_008",
      name: "Standing T-Rows",
      category: Category.BACK,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    // BICEPS ------------------------------------------------------------------
    CABLE_OVERHAND_CURLS: {
      id: "biceps_001",
      name: "Cable Overhand Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    CABLE_UNDERHAND_CURLS: {
      id: "biceps_002",
      name: "Cable Underhand Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    CABLE_ROPE_CURLS: {
      id: "biceps_003",
      name: "Cable Rope Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    DUMBBELL_OVERHAND_CURLS: {
      id: "biceps_004",
      name: "Dumbbell Overhand Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    DUMBBELL_UNDERHAND_CURLS: {
      id: "biceps_005",
      name: "Dumbbell Underhand Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    DUMBBELL_HAMMER_CURLS: {
      id: "biceps_006",
      name: "Dumbbell Hammer Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    SEATED_PREACHER_CURLS: {
      id: "biceps_007",
      name: "Seated Preacher Curls",
      category: Category.BICEPS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    // LEGS --------------------------------------------------------------------
    WEIGHTED_SQUATS: {
      id: "legs_001",
      name: "Weighted Squats",
      category: Category.LEGS,
      notes: "Remember to brace hard! Rest times of ~2 minutes. Do ~3-5x5 with optional back-off final set."
    },
    LEG_PRESS_MACHINE: {
      id: "legs_002",
      name: "Leg Press Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    LEG_EXT_MACHINE: {
      id: "legs_003",
      name: "Leg Extension Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    LEG_CURL_MACHINE: {
      id: "legs_004",
      name: "Leg Curl Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    CALF_EXT_MACHINE: {
      id: "legs_005",
      name: "Calf Extension Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    STANDING_GLUTE_MACHINE: {
      id: "legs_006",
      name: "Standing Glute Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    HIP_ABDUCTION_MACHINE: {
      id: "legs_007",
      name: "Hip Abduction (Out) Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    HIP_ADDUCTION_MACHINE: {
      id: "legs_008",
      name: "Hip Adduction (in) Machine",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    HIP_THRUSTERS: {
      id: "legs_009",
      name: "Hip Thrusters",
      category: Category.LEGS,
      notes: "Rest times of ~1 minutes. Do ~5x8 with optional AMRAP final set."
    },
    // CORE --------------------------------------------------------------------
    MISC_CORE: {
      id: "core_001",
      name: "Miscellaneous Core",
      category: Category.CORE,
      notes: "For miscellaneous core exercises."
    },
    ABDOMINAL_CRUNCH_MACHINE: {
      id: "core_002",
      name: "Abdominal Crunch Machine",
      category: Category.CORE,
      notes: "Rest times of ~1 minutes. Do ~3x25 with optional AMRAP final set."
    },
    OBLIQUE_SIDE_BEND: {
      id: "core_003",
      name: "Oblique Side Bends",
      category: Category.CORE,
      notes: "Lower and lift weight along side of body with arms straight. Rest times of ~1 minutes. Do ~3x25 with optional AMRAP final set."
    }
  }

  /**
   * All available routines
   * @todo This is a temp solution until CRUD operations are ready for routines
   */
  const Routine = {
    CARDIO_DAY: {
      id: "routine_001",
      name: "Cardio Day",
      exercise_ids: [
        Exercise.ELLIPTICAL.id,
        Exercise.STAIR_STEPPER.id,
        Exercise.STRETCHING.id
      ]
    },
    CHEST_1: {
      id: "routine_002",
      name: "Chest, Shoulders, Triceps #1",
      exercise_ids: [
        Exercise.FLAT_TNG_PRESS.id,
        Exercise.INCLINE_TNG_PRESS.id,
        Exercise.LAYING_OVERHEAD_STRAIGHT_ARMS.id,
        Exercise.FRONT_SIDE_RAISES.id,
        Exercise.SKULL_CRUSHERS.id,
        Exercise.STRETCHING.id
      ]
    },
    CHEST_2: {
      id: "routine_003",
      name: "Chest, Shoulders, Triceps #2",
      exercise_ids: [
        Exercise.FLAT_PIN_PRESS.id,
        Exercise.DECLINE_TNG_PRESS.id,
        Exercise.FLY_MACHINE_CHEST.id,
        Exercise.FRONT_SIDE_RAISES.id,
        Exercise.TRICEP_KICKBACKS.id,
        Exercise.STRETCHING.id
      ]
    },
    BACK_1: {
      id: "routine_004",
      name: "Back and Biceps #1",
      exercise_ids: [
        Exercise.BENT_OVER_ROWS.id,
        Exercise.STIFF_LEG_DEADLIFTS.id,
        Exercise.SEATED_CABLE_PULLDOWNS.id,
        Exercise.CABLE_UNDERHAND_CURLS.id,
        Exercise.STRETCHING.id
      ]
    },
    BACK_2: {
      id: "routine_005",
      name: "Back and Biceps #2",
      exercise_ids: [
        Exercise.SEATED_CABLE_ROWS.id,
        Exercise.STANDING_T_ROWS.id,
        Exercise.ASSISTED_PULL_UPS.id,
        Exercise.DUMBBELL_HAMMER_CURLS.id,
        Exercise.STRETCHING.id
      ]
    },
    LEGS_CORE: {
      id: "routine_006",
      name: "Legs and Core",
      exercise_ids: [
        Exercise.LEG_PRESS_MACHINE.id,
        Exercise.LEG_EXT_MACHINE.id,
        Exercise.LEG_CURL_MACHINE.id,
        Exercise.CALF_EXT_MACHINE.id,
        Exercise.STANDING_GLUTE_MACHINE.id,
        Exercise.HIP_ABDUCTION_MACHINE.id,
        Exercise.HIP_ADDUCTION_MACHINE.id,
        Exercise.ABDOMINAL_CRUNCH_MACHINE.id,
        Exercise.OBLIQUE_SIDE_BEND.id,
        Exercise.STRETCHING.id
      ]
    },
  };
  
  return {
    Icon,
    Category,
    Exercise,
    Routine
  }
})();

export default CONSTANTS;
