# Промпт: школьный портрет ученика по референсу

Готовый промпт для генерации фотореалистичного портрета ученика в школьной форме: композиция, поза, свет и фон берутся с исходной фотографии, а лицо — с отдельного фото ученика.

## Что понадобится

Две картинки:

1. **Референс сцены** — исходная фотография, с которой копируются композиция, ракурс, поза, одежда, фон, свет и цветовая гамма.
2. **Референс личности** — фотография ученика, чьё лицо и причёска должны появиться в кадре.

## Настройки по умолчанию

| Параметр | Значение |
|---|---|
| Формат | фотопортрет, вертикальный, 3:4 |
| План | средний портрет, ученик сидит за партой |
| Стиль | профессиональный школьный портрет, высокая реалистичность |
| Фон | класс с тёмно-зелёной доской, книги на переднем плане |
| Свет | мягкий направленный, без вспышки и пересветов |

## Как пользоваться

1. Приложите к запросу обе картинки: сначала референс сцены, затем референс личности.
2. Скопируйте промпт из блока ниже целиком, ничего не выбрасывая.
3. Сгенерируйте изображение в вертикальном формате 3:4.
4. Сравните результат с референсом личности: лицо, форма лица, глаза, брови, нос, губы, причёска.
5. Если черты «поплыли» — повторите генерацию или добавьте в запрос уточнение про конкретную деталь лица.

## Промпт для парней

```json
{
  "task": {
    "type": "reference_based_image_generation",
    "objective": "Recreate the reference photograph while replacing the original person with the male student (schoolboy) from the newly attached identity reference image.",
    "priority": [
      "preserve_identity_of_new_person",
      "match_reference_composition",
      "match_reference_pose",
      "match_reference_lighting",
      "match_reference_environment",
      "photorealistic_result"
    ]
  },
  "reference_handling": {
    "scene_reference": {
      "source": "original_reference_image",
      "use_for": [
        "composition",
        "camera_angle",
        "body_pose",
        "clothing_style",
        "background",
        "lighting",
        "color_palette",
        "props",
        "depth_of_field"
      ]
    },
    "identity_reference": {
      "source": "newly_attached_person_image",
      "use_for": [
        "facial_identity",
        "face_shape",
        "eyes",
        "eyebrows",
        "nose",
        "lips",
        "skin_tone",
        "hair_color",
        "hair_texture",
        "boyish_hairstyle",
        "distinctive_facial_features"
      ],
      "preserve_identity": true,
      "preserve_natural_appearance": true
    },
    "replacement_rules": {
      "replace_original_person": true,
      "retain_original_scene": true,
      "retain_original_pose": true,
      "adapt_clothing_to_male_fit": true,
      "retain_original_camera_framing": true,
      "retain_original_background": true,
      "avoid_blending_faces": true,
      "avoid_copying_identity_from_scene_reference": true,
      "avoid_copying_hair_length_from_scene_reference": true
    }
  },
  "image": {
    "type": "photorealistic_portrait",
    "orientation": "vertical",
    "aspect_ratio": "3:4",
    "resolution_target": "high",
    "visual_style": "professional_school_portrait",
    "realism": "high",
    "texture_detail": "natural",
    "post_processing": "subtle_professional_photography"
  },
  "composition": {
    "shot_type": "medium_portrait",
    "subject_position": "center",
    "subject_alignment": "centered_symmetrical",
    "camera_height": "approximately_eye_level",
    "camera_angle": "straight_on",
    "framing": {
      "top": "small_headroom",
      "bottom": "hands_visible_on_desk",
      "left": "stack_of_books_in_foreground",
      "right": "stack_of_books_in_foreground",
      "subject_visibility": "head_torso_arms_and_hands"
    },
    "perspective": "natural_portrait_perspective",
    "depth_of_field": "moderate",
    "background_visibility": "clearly_recognizable"
  },
  "subject": {
    "identity": "schoolboy_from_identity_reference",
    "gender": "male",
    "role": "male_school_student",
    "position": "seated_behind_a_desk",
    "body_orientation": "facing_camera",
    "head_orientation": "straight_forward",
    "gaze": "looking_directly_at_camera",
    "facial_expression": {
      "type": "calm_friendly_expression",
      "smile": "subtle_closed_lip_smile",
      "eyes": "relaxed_and_engaged",
      "overall_mood": "confident_approachable_and_composed_young_student"
    },
    "posture": {
      "back": "upright",
      "shoulders": "relaxed_natural_male_posture",
      "arms": "resting_forward_on_desk",
      "hands": "gently_clasped_together",
      "fingers": "naturally_interlaced_or_overlapping"
    },
    "identity_adaptation": {
      "face": "faithfully_match_identity_reference",
      "hair": "preserve_male_haircut_and_hairline_from_identity_reference",
      "skin": "natural_realistic_skin_texture",
      "anatomy": "realistic_male_student_proportions",
      "retouching": "minimal"
    }
  },
  "wardrobe": {
    "style": "classic_boys_school_uniform_outfit",
    "shirt": {
      "type": "white_long_sleeved_button_down_dress_shirt",
      "fit": "neat_classic_regular_fit_for_boys",
      "collar": "structured_classic_pointed_shirt_collar",
      "fabric": "opaque_matte_cotton_fabric",
      "sleeves": "long_sleeves_with_soft_natural_folds"
    },
    "tie": {
      "type": "classic_school_necktie",
      "pattern": "diagonal_stripes",
      "colors": [
        "dark_red",
        "navy_blue",
        "white"
      ],
      "knot": "traditional_neat_tie_knot",
      "position": "centered_under_collar"
    },
    "styling": "neat_formal_schoolboy_appearance"
  },
  "environment": {
    "location": "classroom",
    "background": {
      "main_element": "large_dark_green_chalkboard",
      "surface": "matte_chalkboard",
      "color": "deep_muted_green",
      "chalk_details": [
        "large_handwritten_mathematical_symbols",
        "numbers_and_equations",
        "simple_geometric_3d_shapes",
        "stars",
        "atom_symbol_doodle",
        "paper_airplane_sketch",
        "globe_sketch",
        "open_book_sketch"
      ],
      "writing_style": "casual_hand_drawn_chalk_marks",
      "focus": "slightly_soft_but_recognizable",
      "coverage": "fills_most_of_upper_background"
    },
    "furniture": {
      "desk": {
        "position": "foreground",
        "surface": "light_neutral_tabletop",
        "visibility": "visible_across_lower_frame"
      },
      "chair": {
        "position": "behind_subject",
        "visibility": "partially_obscured"
      }
    },
    "props": [
      {
        "object": "stack_of_textbooks",
        "position": "lower_left_foreground",
        "quantity": "several",
        "arrangement": "horizontal_stack",
        "appearance": "mixed_blue_white_and_dark_covers"
      },
      {
        "object": "stack_of_books",
        "position": "lower_right_foreground",
        "quantity": "several",
        "arrangement": "slightly_irregular_horizontal_stack",
        "appearance": "mixed_light_and_dark_covers"
      }
    ],
    "atmosphere": "quiet_academic_classroom"
  },
  "lighting": {
    "type": "soft_directional_portrait_lighting",
    "key_light": {
      "position": "front_upper_left_or_near_camera",
      "quality": "soft",
      "intensity": "moderate"
    },
    "fill_light": "subtle",
    "face_exposure": "balanced",
    "background_exposure": "slightly_darker_than_subject",
    "shadows": "soft_natural_shadows",
    "highlights": "controlled",
    "white_balance": "neutral_slightly_warm",
    "contrast": "moderate",
    "avoid": [
      "harsh_flash",
      "overexposed_skin",
      "strong_color_cast",
      "unnatural_shadows"
    ]
  },
  "color_grading": {
    "overall_palette": [
      "dark_forest_green",
      "warm_neutral_skin_tones",
      "white",
      "dark_brown",
      "muted_blue",
      "dark_red"
    ],
    "saturation": "moderate_and_natural",
    "contrast": "medium_high",
    "black_levels": "deep_but_detailed",
    "white_levels": "bright_but_not_clipped",
    "style": "cinematic_realistic_editorial_photography"
  },
  "camera": {
    "camera_type": "professional_digital_camera",
    "lens_equivalent": "50mm_to_70mm",
    "aperture_look": "approximately_f2.8_to_f4",
    "focus": "sharp_focus_on_face_and_eyes",
    "exposure": "balanced",
    "perspective_distortion": "minimal",
    "image_quality": "high_detail",
    "grain": "very_subtle_or_none"
  },
  "photorealism_constraints": {
    "skin_texture": "retain_fine_natural_texture",
    "hair_strands": "realistic_individual_strands",
    "hands": "anatomically_correct_boy_hands",
    "eyes": "natural_and_symmetrical",
    "clothing_folds": "physically_plausible",
    "book_geometry": "realistic",
    "chalk_marks": "natural_handwritten_appearance",
    "avoid_cgi_appearance": true,
    "avoid_excessive_beautification": true,
    "avoid_plastic_skin": true
  },
  "negative_prompt": [
    "girl",
    "female",
    "woman",
    "feminine_features",
    "feminine_blouse",
    "long_female_hair",
    "makeup",
    "lipstick",
    "eyeliner",
    "cartoon",
    "anime",
    "illustration",
    "3d_render",
    "painting",
    "unrealistic_skin",
    "plastic_face",
    "over_smoothed_skin",
    "identity_mismatch",
    "blended_faces",
    "face_from_original_scene_reference",
    "wrong_facial_features",
    "unnatural_eyes",
    "asymmetrical_pupils",
    "deformed_hands",
    "extra_fingers",
    "missing_fingers",
    "fused_fingers",
    "extra_limbs",
    "distorted_body",
    "unnatural_pose",
    "incorrect_tie_geometry",
    "floating_books",
    "illegible_large_text",
    "excessive_background_blur",
    "harsh_flash",
    "oversaturated_colors",
    "watermark",
    "unwanted_text",
    "low_resolution",
    "motion_blur"
  ],
  "generation_instructions": {
    "method": "image_to_image_with_separate_identity_and_scene_references",
    "identity_strength": "high",
    "scene_composition_strength": "high",
    "style_strength": "moderate",
    "creativity": "low_to_moderate",
    "instruction": "Use the original photograph as the scene and composition reference. Use the newly attached image exclusively as the identity reference for the schoolboy. Reconstruct the classroom portrait with the same camera angle, centered seated pose, a boy's white button-down dress shirt, diagonally striped red and navy tie, clasped hands on the desk, foreground book stacks, dark green chalkboard, soft directional lighting, and natural photographic rendering. The resulting male student must remain recognizable as the boy in the identity reference, keeping his specific male hairstyle. Adapt the lighting and perspective naturally without changing the boy's defining facial features."
  }
}
```
## Промпт для девушек

```json

{
  "task": {
    "type": "reference_based_image_generation",
    "objective": "Recreate the reference photograph while replacing the original person with the person from the newly attached identity reference image.",
    "priority": [
      "preserve_identity_of_new_person",
      "match_reference_composition",
      "match_reference_pose",
      "match_reference_lighting",
      "match_reference_environment",
      "photorealistic_result"
    ]
  },
  "reference_handling": {
    "scene_reference": {
      "source": "original_reference_image",
      "use_for": [
        "composition",
        "camera_angle",
        "body_pose",
        "clothing_style",
        "background",
        "lighting",
        "color_palette",
        "props",
        "depth_of_field"
      ]
    },
    "identity_reference": {
      "source": "newly_attached_person_image",
      "use_for": [
        "facial_identity",
        "face_shape",
        "eyes",
        "eyebrows",
        "nose",
        "lips",
        "skin_tone",
        "hair_color",
        "hair_texture",
        "distinctive_facial_features"
      ],
      "preserve_identity": true,
      "preserve_natural_appearance": true
    },
    "replacement_rules": {
      "replace_original_person": true,
      "retain_original_scene": true,
      "retain_original_pose": true,
      "retain_original_clothing_style": true,
      "retain_original_camera_framing": true,
      "retain_original_background": true,
      "avoid_blending_faces": true,
      "avoid_copying_identity_from_scene_reference": true
    }
  },
  "image": {
    "type": "photorealistic_portrait",
    "orientation": "vertical",
    "aspect_ratio": "3:4",
    "resolution_target": "high",
    "visual_style": "professional_school_portrait",
    "realism": "high",
    "texture_detail": "natural",
    "post_processing": "subtle_professional_photography"
  },
  "composition": {
    "shot_type": "medium_portrait",
    "subject_position": "center",
    "subject_alignment": "centered_symmetrical",
    "camera_height": "approximately_eye_level",
    "camera_angle": "straight_on",
    "framing": {
      "top": "small_headroom",
      "bottom": "hands_visible_on_desk",
      "left": "stack_of_books_in_foreground",
      "right": "stack_of_books_in_foreground",
      "subject_visibility": "head_torso_arms_and_hands"
    },
    "perspective": "natural_portrait_perspective",
    "depth_of_field": "moderate",
    "background_visibility": "clearly_recognizable"
  },
  "subject": {
    "identity": "person_from_identity_reference",
    "position": "seated_behind_a_desk",
    "body_orientation": "facing_camera",
    "head_orientation": "straight_forward",
    "gaze": "looking_directly_at_camera",
    "facial_expression": {
      "type": "calm_friendly_expression",
      "smile": "subtle_closed_lip_smile",
      "eyes": "relaxed_and_engaged",
      "overall_mood": "confident_approachable_and_composed"
    },
    "posture": {
      "back": "upright",
      "shoulders": "relaxed",
      "arms": "resting_forward_on_desk",
      "hands": "gently_clasped_together",
      "fingers": "naturally_interlaced_or_overlapping"
    },
    "identity_adaptation": {
      "face": "faithfully_match_identity_reference",
      "hair": "preserve_identity_reference_features_while_adapting_to_the_hairstyle_of_the_scene",
      "skin": "natural_realistic_skin_texture",
      "anatomy": "realistic_human_proportions",
      "retouching": "minimal"
    }
  },
  "wardrobe": {
    "style": "classic_school_uniform_inspired_outfit",
    "shirt": {
      "type": "white_long_sleeved_button_up_blouse",
      "fit": "neat_and_slightly_fitted",
      "collar": "classic_pointed_collar",
      "fabric": "opaque_matte_fabric",
      "sleeves": "long_sleeves_with_soft_natural_folds"
    },
    "tie": {
      "type": "classic_necktie",
      "pattern": "diagonal_stripes",
      "colors": [
        "dark_red",
        "navy_blue",
        "white"
      ],
      "knot": "traditional_tie_knot",
      "position": "centered_under_collar"
    },
    "styling": "neat_formal_school_appearance"
  },
  "environment": {
    "location": "classroom",
    "background": {
      "main_element": "large_dark_green_chalkboard",
      "surface": "matte_chalkboard",
      "color": "deep_muted_green",
      "chalk_details": [
        "large_handwritten_mathematical_symbols",
        "numbers",
        "simple_geometric_shapes",
        "stars",
        "hearts",
        "small_doodles",
        "simple_flower_drawings",
        "open_book_sketch"
      ],
      "writing_style": "casual_hand_drawn_chalk_marks",
      "focus": "slightly_soft_but_recognizable",
      "coverage": "fills_most_of_upper_background"
    },
    "furniture": {
      "desk": {
        "position": "foreground",
        "surface": "light_neutral_tabletop",
        "visibility": "visible_across_lower_frame"
      },
      "chair": {
        "position": "behind_subject",
        "visibility": "partially_obscured"
      }
    },
    "props": [
      {
        "object": "stack_of_textbooks",
        "position": "lower_left_foreground",
        "quantity": "several",
        "arrangement": "horizontal_stack",
        "appearance": "mixed_blue_white_and_dark_covers"
      },
      {
        "object": "stack_of_books",
        "position": "lower_right_foreground",
        "quantity": "several",
        "arrangement": "slightly_irregular_horizontal_stack",
        "appearance": "mixed_light_and_dark_covers"
      }
    ],
    "atmosphere": "quiet_academic_classroom"
  },
  "lighting": {
    "type": "soft_directional_portrait_lighting",
    "key_light": {
      "position": "front_upper_left_or_near_camera",
      "quality": "soft",
      "intensity": "moderate"
    },
    "fill_light": "subtle",
    "face_exposure": "balanced",
    "background_exposure": "slightly_darker_than_subject",
    "shadows": "soft_natural_shadows",
    "highlights": "controlled",
    "white_balance": "neutral_slightly_warm",
    "contrast": "moderate",
    "avoid": [
      "harsh_flash",
      "overexposed_skin",
      "strong_color_cast",
      "unnatural_shadows"
    ]
  },
  "color_grading": {
    "overall_palette": [
      "dark_forest_green",
      "warm_neutral_skin_tones",
      "white",
      "dark_brown",
      "muted_blue",
      "dark_red"
    ],
    "saturation": "moderate_and_natural",
    "contrast": "medium_high",
    "black_levels": "deep_but_detailed",
    "white_levels": "bright_but_not_clipped",
    "style": "cinematic_realistic_editorial_photography"
  },
  "camera": {
    "camera_type": "professional_digital_camera",
    "lens_equivalent": "50mm_to_70mm",
    "aperture_look": "approximately_f2.8_to_f4",
    "focus": "sharp_focus_on_face_and_eyes",
    "exposure": "balanced",
    "perspective_distortion": "minimal",
    "image_quality": "high_detail",
    "grain": "very_subtle_or_none"
  },
  "photorealism_constraints": {
    "skin_texture": "retain_fine_natural_texture",
    "hair_strands": "realistic_individual_strands",
    "hands": "anatomically_correct",
    "eyes": "natural_and_symmetrical",
    "clothing_folds": "physically_plausible",
    "book_geometry": "realistic",
    "chalk_marks": "natural_handwritten_appearance",
    "avoid_cgi_appearance": true,
    "avoid_excessive_beautification": true,
    "avoid_plastic_skin": true
  },
  "negative_prompt": [
    "cartoon",
    "anime",
    "illustration",
    "3d_render",
    "painting",
    "unrealistic_skin",
    "plastic_face",
    "over_smoothed_skin",
    "identity_mismatch",
    "blended_faces",
    "face_from_original_scene_reference",
    "wrong_facial_features",
    "unnatural_eyes",
    "asymmetrical_pupils",
    "deformed_hands",
    "extra_fingers",
    "missing_fingers",
    "fused_fingers",
    "extra_limbs",
    "distorted_body",
    "unnatural_pose",
    "incorrect_tie_geometry",
    "floating_books",
    "illegible_large_text",
    "excessive_background_blur",
    "harsh_flash",
    "oversaturated_colors",
    "watermark",
    "unwanted_text",
    "low_resolution",
    "motion_blur"
  ],
  "generation_instructions": {
    "method": "image_to_image_with_separate_identity_and_scene_references",
    "identity_strength": "high",
    "scene_composition_strength": "high",
    "style_strength": "moderate",
    "creativity": "low_to_moderate",
    "instruction": "Use the original photograph as the scene and composition reference. Use the newly attached image exclusively as the identity reference for the person. Reconstruct the classroom portrait with the same camera angle, centered seated pose, white blouse, diagonally striped red and navy tie, clasped hands on the desk, foreground book stacks, dark green chalkboard, soft directional lighting, and natural photographic rendering. The resulting person must remain recognizable as the person in the identity reference. Adapt the lighting and perspective naturally without changing the person's defining facial features."
  }
}
```

## Чек-лист результата

- [ ] лицо узнаваемо и совпадает с референсом личности;
- [ ] причёска и линия волос взяты с референса личности, а не со сцены;
- [ ] ракурс, поза и кадрирование совпадают с референсом сцены;
- [ ] руки анатомически корректны, пальцы не слиплись;
- [ ] галстук и воротник выглядят правдоподобно;
- [ ] фон — класс с зелёной доской, книги на переднем плане;
- [ ] нет эффекта пластиковой кожи и «нарисованности»;
- [ ] нет водяных знаков и лишнего текста.

## Важно

Используйте только собственные фотографии или снимки людей, которые дали согласие на такую обработку. Готовое изображение не должно выдаваться за настоящую фотографию человека.
