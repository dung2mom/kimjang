import { ProductionPackage } from '../types/production';
import kimchiArtisanImg from '../assets/images/kimchi_artisan_cabbage_1791177468651.jpg';
import kimjangCommunityImg from '../assets/images/kimjang_community_share_1791177484504.jpg';
import kimchiSteamingRiceImg from '../assets/images/kimchi_steaming_rice_1791177495385.jpg';

export const KIMCHI_PACKAGE: ProductionPackage = {
  title: "Kimchi: A Taste of Home (15s Korean Culture)",
  koreanTitle: "김치와 김장 (Kimchi & Kimjang)",
  oneLineConcept: "A 15-second vertical video explaining Korean kimchi culture to global Gen Z: from the warm communal autumn tradition of kimjang to how it lives on modern dining tables at every meal as a taste of home.",
  theme: "Korean Kimchi Culture (Kimjang Tradition & Everyday Living)",
  targetAudience: "International university students aged 18–25 who have never visited Korea and know little about kimchi",
  platform: "YouTube Shorts / Instagram Reels / TikTok (Vertical 9:16)",
  tone: "Warm, friendly, fresh, and welcoming (never calling kimchi 'weird' or 'exotic')",
  coreMessage: "Kimchi is more than food—it's community, care, and the taste of home.",
  totalDuration: "00:15 (Exactly 15 seconds, 3 beats)",
  shots: [
    {
      id: 1,
      timeRange: "0:00 – 0:05",
      startTime: 0,
      endTime: 5,
      duration: 5,
      title: "Beat 1 (0–5s | Hook): The Seasoning Craft",
      location: "Warm Sunlit Kitchen, Seoul",
      sceneDescription: "Close-up of salted napa cabbage leaves being gently rubbed with a rich seasoning paste made with gochugaru (Korean chili flakes), garlic, and fresh scallions under warm kitchen light. The glossy red sauce glistens appetizingly against the crisp, jade-tinted cabbage leaves.",
      cameraMovement: "Slow, fluid dolly-in closing in on the hands and glistening seasoning paste.",
      lightingPalette: "Warm golden kitchen light; vibrant gochugaru crimson-red, crisp napa cabbage green, and honey wood tones.",
      soundMusic: "Original, light, upbeat instrumental at low volume: gentle acoustic guitar fingerpicking and soft lo-fi rim clicks, layered with subtle crisp cabbage foley.",
      onScreenText: "Kimchi is more than a side dish in Korea.",
      koreanText: "김치 (Kimchi)",
      englishTranslation: "More than a side dish in Korea",
      narration: "Kimchi is more than a side dish in Korea.",
      wordCount: 9,
      imagePath: kimchiArtisanImg,
      aiPrompt: {
        subjectAction: "Close-up of caring hands in an oatmeal-colored knit sleeve rubbing crisp salted napa cabbage leaf-by-leaf with a rich, glossy red seasoning paste made with gochugaru (Korean chili flakes), garlic, and fresh scallions. Appetizing moisture glistens on the crunchy cabbage.",
        settingTime: "Warm Korean domestic kitchen in late autumn. Soft golden morning light pouring through a window, illuminating the textured cabbage and terracotta surfaces.",
        cameraMovement: "Slow, steady dolly-in camera move closing in on the vibrant red seasoning and crunchy leaf texture with shallow depth of field.",
        visualStyle: "Cinematic, warm, friendly documentary photography, rich organic color grading, soft natural highlights, f/2.0 aperture.",
        aspectRatio: "9:16 vertical",
        duration: "5 seconds",
        continuityNotes: "Protagonist character: Young Korean woman (20s) wearing an oatmeal knit sweater and a sage green linen apron. Warm amber color palette maintained across all 3 beats.",
        fullPromptText: "Cinematic 9:16 vertical video. Close-up of fresh salted napa cabbage leaves being rubbed with a vibrant red seasoning paste made with gochugaru (Korean chili flakes), minced garlic, and scallions. Warm golden kitchen light streaming from the side, glistening sauce texture with shallow depth of field. Slow smooth dolly-in camera movement. Cinematic warm tones, appetizing culinary photography, 9:16 aspect ratio, 5 seconds duration."
      }
    },
    {
      id: 2,
      timeRange: "0:05 – 0:10",
      startTime: 5,
      endTime: 10,
      duration: 5,
      title: "Beat 2 (5–10s | Explain): Kimjang Community Gathering",
      location: "Bright Traditional Hanok Courtyard, Seoul",
      sceneDescription: "Wide shot of family and neighbors making kimchi together in a bright courtyard during late autumn kimjang. The young woman in her oatmeal sweater and sage green apron, her mother, and friendly neighbors work side by side around a large red basin, smiling, chatting, and sharing laughter in the crisp sunny air.",
      cameraMovement: "Dynamic handheld tracking shot gliding smoothly past the smiling participants, capturing the warmth and lively conversation.",
      lightingPalette: "Crisp late autumn afternoon sun; bright natural daylight, warm wooden hanok pillars, terracotta earthenware onggi jars, and rosy smiling faces.",
      soundMusic: "Upbeat acoustic instrumental swells with warm melodic bells and light percussion; faint background murmur of genuine laughter and chatting.",
      onScreenText: "Every winter, families gather for kimjang to make and share it together.",
      koreanText: "김장 (Kimjang)",
      englishTranslation: "Making & sharing kimchi together",
      narration: "Every winter, families gather for kimjang to make and share it together.",
      wordCount: 12,
      imagePath: kimjangCommunityImg,
      aiPrompt: {
        subjectAction: "Wide shot of a Korean family and friendly neighbors gathered together in late autumn for kimjang. The same young woman in her oatmeal knit sweater and sage green apron laughs alongside her mother and neighborhood aunties as they prepare and share fresh kimchi around a large work table.",
        settingTime: "Bright traditional courtyard with stone pavers in Seoul. Late autumn afternoon, bright crisp daylight, traditional earthenware onggi jars arranged along the courtyard wall.",
        cameraMovement: "Gentle handheld tracking shot moving along the side of the table, smoothly framing the group's smiling faces and communal connection.",
        visualStyle: "Warm, family-friendly documentary realism, natural motion blur, authentic joyful expressions, Kodak Portra film warmth.",
        aspectRatio: "9:16 vertical",
        duration: "5 seconds",
        continuityNotes: "Same young woman (oatmeal sweater, sage green apron) and mother character. Consistent warm autumnal color temperature and lighting continuity.",
        fullPromptText: "Cinematic 9:16 vertical video. Wide shot of a multi-generational Korean family and neighbors making kimchi together in a bright, sunlit courtyard during late autumn kimjang. The young woman in oatmeal knit sweater and sage apron smiles warmly while working alongside her family. Handheld smooth tracking shot capturing authentic laughter and conversation. Bright natural lighting, traditional courtyard setting, family-friendly, 9:16 aspect ratio, 5 seconds duration."
      }
    },
    {
      id: 3,
      timeRange: "0:10 – 0:15",
      startTime: 10,
      endTime: 15,
      duration: 5,
      title: "Beat 3 (10–15s | Close): Everyday Meal & Taste of Home",
      location: "Cozy Modern Dining Table, Seoul",
      sceneDescription: "A cozy modern dining table set with a steaming bowl of white rice, a warm bowl of soup, and a clean ceramic dish of freshly cut kimchi. A hand uses stainless steel chopsticks to gently lift a crisp, ruby-red piece of kimchi. The young woman looks up with a contented, radiant smile as the video closes.",
      cameraMovement: "Slow, elegant pull-back from the chopsticks and steaming rice bowl to a warm medium shot of the dining table.",
      lightingPalette: "Inviting indoor dinner ambient light; soft golden table glow, pristine white rice, clear golden soup broth, and vibrant red kimchi.",
      soundMusic: "Satisfying crisp crunch sound effect (foley); the original light acoustic instrumental resolves into a sweet, lingering chime and gentle warm bass note.",
      onScreenText: "Today, it sits on the table at almost every meal — a taste of home.",
      koreanText: "집밥 (Taste of Home)",
      englishTranslation: "A taste of home on every table",
      narration: "Today, it sits on the table at almost every meal — a taste of home.",
      wordCount: 14,
      imagePath: kimchiSteamingRiceImg,
      aiPrompt: {
        subjectAction: "At a modern wooden dining table, a pair of sleek Korean stainless steel chopsticks lifts a vibrant, crisp piece of red kimchi from a white ceramic bowl. Beside it sits a steaming bowl of white rice and soup. The camera pulls back to show the same young woman in her oatmeal sweater smiling warmly.",
        settingTime: "Modern cozy Seoul home dining room. Evening dinner hour, warm golden table lamp lighting, soft steam curling gently off the rice bowl.",
        cameraMovement: "Slow, graceful pull-back movement starting from a tight close-up of the chopsticks lifting the kimchi, expanding into a comforting medium view of the dining spread.",
        visualStyle: "Warm, appetizing editorial food photography, shallow depth of field, gentle steam dynamics, inviting and wholesome atmosphere.",
        aspectRatio: "9:16 vertical",
        duration: "5 seconds",
        continuityNotes: "Same young woman in the oatmeal sweater. Completes the narrative loop from the kitchen craft (Beat 1), through community sharing (Beat 2), to daily dinner table connection (Beat 3).",
        fullPromptText: "Cinematic 9:16 vertical video. A cozy modern dining table with a steaming bowl of fluffy white rice, warm soup, and a small dish of sliced vibrant red kimchi. Sleek stainless steel chopsticks lift a crisp piece of kimchi, steam curling upward under warm evening dining light. Smooth slow pull-back camera movement revealing the full dinner table. Warm, appetizing, comforting home aesthetic, 9:16 aspect ratio, 5 seconds duration."
      }
    }
  ],
  narrationOverview: {
    totalWords: 35, // 9 + 12 + 14 = exactly 35 words!
    koreanPhrase: "김치 & 김장 (Kimchi & Kimjang)",
    koreanPhonetic: "Gim-chi & Gim-jang",
    koreanMeaning: "Kimchi (fermented cabbage dish) & Kimjang (tradition of making and sharing kimchi together)",
    targetWordCountRange: "About 35 words (Achieved: Exactly 35 words)"
  },
  musicDirection: {
    genre: "Original Light Upbeat Acoustic Instrumental (Low Volume)",
    tempoBpm: 105,
    mood: "Warm, friendly, lighthearted, gentle, and welcoming",
    instrumentation: [
      "Acoustic Guitar: Warm fingerpicked arpeggios providing an inviting, wholesome rhythm.",
      "Soft Gayageum Accents: Gentle traditional Korean 12-string zither notes adding subtle cultural color.",
      "Lo-Fi Percussion & Shaker: Very light, muted 105 BPM brush and rim clicks kept strictly at low volume beneath the voice-over.",
      "Culinary Foley: Gentle crisp cabbage snap at 0:02 and soft chopstick contact at 0:12."
    ],
    structureBreakdown: [
      {
        time: "0:00 – 0:05 (Beat 1: Hook)",
        description: "Soft acoustic guitar starts gently with light cabbage crunch foley, establishing warm curiosity under the voice-over."
      },
      {
        time: "0:05 – 0:10 (Beat 2: Explain)",
        description: "Light shaker and cheerful melody lift the rhythm as the scene opens to the sunny kimjang courtyard and community laughter."
      },
      {
        time: "0:10 – 0:15 (Beat 3: Close)",
        description: "Gentle melodic resolution with warm acoustic decay as the chopsticks lift the kimchi, fading into a cozy home feel."
      }
    ]
  },
  culturalChecks: [
    {
      title: "Kimjang: The Communal Living Tradition (UNESCO Heritage)",
      focusArea: "Making and sharing kimchi together in late autumn",
      whyItMatters: "Kimjang is an annual communal ritual where extended families and neighbors gather before winter to prepare kimchi in large quantities, sharing with neighbors and elderly community members. It is not an individual chore, but a celebration of mutual support and 'Jeong' (affectionate care).",
      respectfulExecution: "Show the multi-generational gathering in a sunny courtyard with laughter, cooperation, and shared work. Highlight 'sharing' as the central virtue.",
      pitfallToAvoid: "Never depict kimchi preparation as isolated drudgery or an exotic curiosity; present it as a cherished seasonal event similar to Thanksgiving harvest gatherings.",
      verificationStatus: true
    },
    {
      title: "Kimchi as an Everyday Staple, Not an 'Exotic Challenge'",
      focusArea: "Normalization of kimchi as healthy, beloved comfort food",
      whyItMatters: "Media aimed at Western youth often sensationalizes fermented foods as 'bizarre', 'pungent', or 'weird'. In reality, kimchi is a nutritious, probiotic-rich everyday comfort food eaten naturally at breakfast, lunch, and dinner.",
      respectfulExecution: "Pair kimchi with a steaming bowl of rice and soup on a clean, modern dining table, treating it with the same natural dignity as bread in France or pasta in Italy.",
      pitfallToAvoid: "Strictly avoid words like 'stinky', 'weird', or exaggerated reactions. Emphasize crispness, freshness, and the comforting feeling of home.",
      verificationStatus: true
    },
    {
      title: "Accurate Terminology & Visual Dignity",
      focusArea: "Accurate Korean food terms: kimchi, kimjang, napa cabbage, gochugaru",
      whyItMatters: "Using precise culinary names (gochugaru instead of generic 'red powder', napa cabbage instead of 'lettuce') educates global viewers respectfully and builds genuine cultural appreciation.",
      respectfulExecution: "Use clear, standardized romanization with proper context. Maintain wardrobe and lighting continuity (oatmeal sweater, warm autumn light) across all 3 beats.",
      pitfallToAvoid: "Do not use mock Asian fonts, cartoon caricatures, or real celebrity endorsements.",
      verificationStatus: true
    }
  ]
};
