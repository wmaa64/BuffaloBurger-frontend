const myproducts= [
/* 1st */
{
  "_id": {"$oid" : "6769ba64c2e04e467c89bc8e"},
  "name": {
    "en": "Shiitake Mushroom",
    "ar": "شيتاكي مشروم"
  },
  "description": {
    "en": "Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.",
    "ar": "طع المشروم السوتيه مع المايونيز الكريمي وجبنة شيدر وبرجر اللحم الصافي"
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1734982194/products/Shiitake-Mushroom.jpg",
  "basePrice": 160,
  "productType": "food",
  "categoryId": {"$oid" :"66dacde4bb2b2fece22e46bc"},
  "topselling": true,
  "sizes": [
    {
      "size": {
        "en": "150 gm",
        "ar": "150 جم"
      },
      "price": 0
    },
    {
      "size": {
        "en": "200 gm",
        "ar": "200 جم"
      },
      "price": 35
    },
    {
      "size": {
        "en": "400 gm",
        "ar": "400 جم"
      },
      "price": 125
    }
  ],
  "breadTypes": [
    {
      "breadType": {
        "en": "White bread",
        "ar": "عيش ابيض"
      },
      "price": 0
    }
  ],
  "combos": [
    {
      "comboName": {
        "en": "Choose sandwich only",
        "ar": "اختار ساندوتش فقط"
      },
      "price": 0,
      "description": {
        "en": "",
        "ar": ""
      },
      "image": "https://example.com/images/classic-combo.jpg",
      "includesDrink": false,
      "drinkOptions": []
    },
    {
      "comboName": {
        "en": "Onion Rings Combo",
        "ar": "حلقات البصل المقرمشة"
      },
      "price": 75 ,
      "description": {
        "en": "Onion Rings, soft drink, and a dipping sauce (EGP 75)",
        "ar": "حلقات البصل المقرمشة مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Cheesy Fries Combo (French Fries)",
        "ar": "(تشيزي فرايز كومبو (فريتش فرايز"
      },
      "price": 105 ,
      "description": {
        "en": "Cheesy French Fries, soft drink and a dipping sauce (EGP 105)",
        "ar": "تشيزي فرينش فرايز مع مشروب غازي و صوص (ج.م 105)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Blanco Fries Combo (French Fries)",
        "ar": "(بلانكو فرايز كومبو (فريتش فرايز"
      },
      "price": 90 ,
      "description": {
        "en": "Blanco French Fries, soft drink, and a dipping sauce (EGP 90)",
        "ar": "بلانكو فرينش فرايز مع مشروب غازي و صوص (ج.م 90)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
  },
  {
    "comboName": {
      "en": "French Fries Combo",
      "ar": "كومبو فرينش فرايز"
    },
    "price": 60 ,
    "description": {
      "en": "French Fries, Soft Drink, and a Dipping Sauce (EGP 60)",
      "ar": "فرينش فرايز مع مشروب غازي و صوص (ج.م 60)"
    },
    "image": "",
    "includesDrink": true,
    "drinkOptions": [
      {
        "en": "Pure Apple Juice (EGP 6)",
        "ar": "عصير تفاح بيور (ج.م 6)"
      },
      {
        "en": "Big Cola",
        "ar": "بيج كولا"
      },
      {
        "en": "Green Cola (EGP 11.4)",
        "ar": "جرين كولا (ج.م 11.4)"
      },
      {
        "en": "Green Lemon (EGP 11.4)",
        "ar": "جرين ليمون (ج.م 11.4)"
      },
      {
        "en": "V Cola (EGP 10)",
        "ar": "ڤي كولا (ج.م 10)"
      }
    ]
    },
    {
      "comboName": {
        "en": "Diablo Fries Combo",
        "ar": "ديابلو فرايز"
      },
      "price": 75 ,
      "description": {
        "en": "Diablo fries, Soft Drink, and a dipping sauce (EGP 75)",
        "ar": "ديابلو فرايز مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    }
  ],
  "extras": [
    {
      "extraName": {
        "en": "Jalapeño (EGP 10)",
        "ar": "هالپينيو (ج.م 10)"
      },
      "price": 10
    },
    {
      "extraName": {
        "en": "Beef Bacon (EGP 60)",
        "ar": "بيكون بقري (ج.م 60)"
      },
      "price": 60
    },
    {
      "extraName": {
        "en": "Sautéed Mushroom (EGP 25)",
        "ar": "مشروم سوتية (ج.م 25)"
      },
      "price": 25
    },
    {
      "extraName": {
        "en": "Cheddar Cheese (EGP 15)",
        "ar": "جبنة شيدر (ج.م 15)"
      },
      "price": 15
    },
    {
      "extraName": {
        "en": "Salad Cup (EGP 5)",
        "ar": "علبة سلطة (ج.م 5)"
      },
      "price": 5 
    },
    {
      "extraName": {
        "en": "Pickles (EGP 5)",
        "ar": "مخلل (ج.م 5)"
      },
      "price": 5
    }

  ],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},

/* 2sd */
{
  "_id": {"$oid" : "6769bcf9c2e04e467c89bca7"},
  "name": {
    "en": "Rastafari Chicken",
    "ar": "راستافاري تشيكن"
  },
  "description": {
    "en": "Crispy cheddar jalapeño bites, with chicken strips, and creamy Buffalo sauce.",
    "ar": "الدجاج الاستريبس المقرمشة بايتس الجبنة الشيدر المحشوه بالهالپينيو وصوص البافالو الكريمي."
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1734982855/products/Rastafari-Chicken.jpg",
  "basePrice": 150,
  "productType": "food",
  "categoryId": { "$oid" : "66dc3ad3bb2b2fece22e46cf"},
  "topselling": true,
  "sizes": [
    {
      "size": {
        "en": "Strips (EGP 150",
        "ar": "قطع (150 ج)"
      },
      "price": 0
    }
  ],
  "breadTypes": [
    {
      "breadType": {
        "en": "White bread",
        "ar": "عيش ابيض"
      },
      "price": 0
    }
  ],
  "combos": [
    {
      "comboName": {
        "en": "Choose sandwich only",
        "ar": "اختار ساندوتش فقط"
      },
      "price": 0,
      "description": {
        "en": "",
        "ar": ""
      },
      "image": "",
      "includesDrink": false,
      "drinkOptions": []
    },
    {
      "comboName": {
        "en": "Onion Rings Combo",
        "ar": "حلقات البصل المقرمشة"
      },
      "price": 75 ,
      "description": {
        "en": "Onion Rings, soft drink, and a dipping sauce (EGP 75)",
        "ar": "حلقات البصل المقرمشة مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Cheesy Fries Combo (French Fries)",
        "ar": "(تشيزي فرايز كومبو (فريتش فرايز"
      },
      "price": 105 ,
      "description": {
        "en": "Cheesy French Fries, soft drink and a dipping sauce (EGP 105)",
        "ar": "تشيزي فرينش فرايز مع مشروب غازي و صوص (ج.م 105)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Blanco Fries Combo (French Fries)",
        "ar": "(بلانكو فرايز كومبو (فريتش فرايز"
      },
      "price": 90 ,
      "description": {
        "en": "Blanco French Fries, soft drink, and a dipping sauce (EGP 90)",
        "ar": "بلانكو فرينش فرايز مع مشروب غازي و صوص (ج.م 90)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
  },
  {
    "comboName": {
      "en": "French Fries Combo",
      "ar": "كومبو فرينش فرايز"
    },
    "price": 60 ,
    "description": {
      "en": "French Fries, Soft Drink, and a Dipping Sauce (EGP 60)",
      "ar": "فرينش فرايز مع مشروب غازي و صوص (ج.م 60)"
    },
    "image": "",
    "includesDrink": true,
    "drinkOptions": [
      {
        "en": "Pure Apple Juice (EGP 6)",
        "ar": "عصير تفاح بيور (ج.م 6)"
      },
      {
        "en": "Big Cola",
        "ar": "بيج كولا"
      },
      {
        "en": "Green Cola (EGP 11.4)",
        "ar": "جرين كولا (ج.م 11.4)"
      },
      {
        "en": "Green Lemon (EGP 11.4)",
        "ar": "جرين ليمون (ج.م 11.4)"
      },
      {
        "en": "V Cola (EGP 10)",
        "ar": "ڤي كولا (ج.م 10)"
      }
    ]
    },
    {
      "comboName": {
        "en": "Diablo Fries Combo",
        "ar": "ديابلو فرايز"
      },
      "price": 75 ,
      "description": {
        "en": "Diablo fries, Soft Drink, and a dipping sauce (EGP 75)",
        "ar": "ديابلو فرايز مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    }
  ],
  "extras": [
    {
      "extraName": {
        "en": "Jalapeño (EGP 10)",
        "ar": "هالپينيو (ج.م 10)"
      },
      "price": 10
    },
    {
      "extraName": {
        "en": "Beef Bacon (EGP 60)",
        "ar": "بيكون بقري (ج.م 60)"
      },
      "price": 60
    },
    {
      "extraName": {
        "en": "Sautéed Mushroom (EGP 25)",
        "ar": "مشروم سوتية (ج.م 25)"
      },
      "price": 25
    },
    {
      "extraName": {
        "en": "Cheddar Cheese (EGP 15)",
        "ar": "جبنة شيدر (ج.م 15)"
      },
      "price": 15
    },
    {
      "extraName": {
        "en": "Salad Cup (EGP 5)",
        "ar": "علبة سلطة (ج.م 5)"
      },
      "price": 5 
    },
    {
      "extraName": {
        "en": "Pickles (EGP 5)",
        "ar": "مخلل (ج.م 5)"
      },
      "price": 5
    }

  ],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},
/* 3rd */
{
  "_id": {"$oid" : "6769bddac2e04e467c89bcab"},
  "name": {
    "en": "Keto Lettuce Wrap",
    "ar": "كيتو ليتوس راب"
  },
  "description": {
    "en": "Pure beef burger embedded in fresh whole romaine lettuce with cheddar cheese. Served with our signature Buffalo sauce in a cup.",
    "ar": "برجر اللحم الصافي داخل قطعه كامله من خس الكابوتشا مع الجبنة الشيدر ويقدم مع كب صوص البافالو الكريمي."
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1734983076/products/Keto-Lettuce-Wrap.jpg",
  "basePrice": 170,
  "productType": "food",
  "categoryId": { "$oid" : "66e032c2696c11c8efd90bc6"},
  "topselling": true,
  "sizes": [
    {
      "size": {
        "en": "150 gm",
        "ar": "150 جم"
      },
      "price": 0
    },
    {
      "size": {
        "en": "200 gm",
        "ar": "200 جم"
      },
      "price": 35
    },
    {
      "size": {
        "en": "400 gm",
        "ar": "400 جم"
      },
      "price": 125
    }
  ],
  "breadTypes": [],
  "combos": [
    {
      "comboName": {
        "en": "Choose sandwich only",
        "ar": "اختار ساندوتش فقط"
      },
      "price": 0,
      "description": {
        "en": "",
        "ar": ""
      },
      "image": "",
      "includesDrink": false,
      "drinkOptions": []
    },
    {
      "comboName": {
        "en": "Onion Rings Combo",
        "ar": "حلقات البصل المقرمشة"
      },
      "price": 75 ,
      "description": {
        "en": "Onion Rings, soft drink, and a dipping sauce (EGP 75)",
        "ar": "حلقات البصل المقرمشة مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Cheesy Fries Combo (French Fries)",
        "ar": "(تشيزي فرايز كومبو (فريتش فرايز"
      },
      "price": 105 ,
      "description": {
        "en": "Cheesy French Fries, soft drink and a dipping sauce (EGP 105)",
        "ar": "تشيزي فرينش فرايز مع مشروب غازي و صوص (ج.م 105)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    },
    {
      "comboName": {
        "en": "Blanco Fries Combo (French Fries)",
        "ar": "(بلانكو فرايز كومبو (فريتش فرايز"
      },
      "price": 90 ,
      "description": {
        "en": "Blanco French Fries, soft drink, and a dipping sauce (EGP 90)",
        "ar": "بلانكو فرينش فرايز مع مشروب غازي و صوص (ج.م 90)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
  },
  {
    "comboName": {
      "en": "French Fries Combo",
      "ar": "كومبو فرينش فرايز"
    },
    "price": 60 ,
    "description": {
      "en": "French Fries, Soft Drink, and a Dipping Sauce (EGP 60)",
      "ar": "فرينش فرايز مع مشروب غازي و صوص (ج.م 60)"
    },
    "image": "",
    "includesDrink": true,
    "drinkOptions": [
      {
        "en": "Pure Apple Juice (EGP 6)",
        "ar": "عصير تفاح بيور (ج.م 6)"
      },
      {
        "en": "Big Cola",
        "ar": "بيج كولا"
      },
      {
        "en": "Green Cola (EGP 11.4)",
        "ar": "جرين كولا (ج.م 11.4)"
      },
      {
        "en": "Green Lemon (EGP 11.4)",
        "ar": "جرين ليمون (ج.م 11.4)"
      },
      {
        "en": "V Cola (EGP 10)",
        "ar": "ڤي كولا (ج.م 10)"
      }
    ]
    },
    {
      "comboName": {
        "en": "Diablo Fries Combo",
        "ar": "ديابلو فرايز"
      },
      "price": 75 ,
      "description": {
        "en": "Diablo fries, Soft Drink, and a dipping sauce (EGP 75)",
        "ar": "ديابلو فرايز مع مشروب غازي و صوص (ج.م 75)"
      },
      "image": "",
      "includesDrink": true,
      "drinkOptions": [
        {
          "en": "Pure Apple Juice (EGP 6)",
          "ar": "عصير تفاح بيور (ج.م 6)"
        },
        {
          "en": "Big Cola",
          "ar": "بيج كولا"
        },
        {
          "en": "Green Cola (EGP 11.4)",
          "ar": "جرين كولا (ج.م 11.4)"
        },
        {
          "en": "Green Lemon (EGP 11.4)",
          "ar": "جرين ليمون (ج.م 11.4)"
        },
        {
          "en": "V Cola (EGP 10)",
          "ar": "ڤي كولا (ج.م 10)"
        }
      ]
    }
  ],
  "extras": [
    {
      "extraName": {
        "en": "Jalapeño (EGP 10)",
        "ar": "هالپينيو (ج.م 10)"
      },
      "price": 10
    },
    {
      "extraName": {
        "en": "Beef Bacon (EGP 60)",
        "ar": "بيكون بقري (ج.م 60)"
      },
      "price": 60
    },
    {
      "extraName": {
        "en": "Sautéed Mushroom (EGP 25)",
        "ar": "مشروم سوتية (ج.م 25)"
      },
      "price": 25
    },
    {
      "extraName": {
        "en": "Cheddar Cheese (EGP 15)",
        "ar": "جبنة شيدر (ج.م 15)"
      },
      "price": 15
    },
    {
      "extraName": {
        "en": "Salad Cup (EGP 5)",
        "ar": "علبة سلطة (ج.م 5)"
      },
      "price": 5 
    },
    {
      "extraName": {
        "en": "Pickles (EGP 5)",
        "ar": "مخلل (ج.م 5)"
      },
      "price": 5
    }

  ],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},
/* 4th */
{
  "_id": {"$oid" : "6769bf31c2e04e467c89bcaf"},
  "name": {
    "en": "Jalapeño Beef Fries",
    "ar": "هالپينيو بيف فرايز"
  },
  "description": {
    "en": "",
    "ar": ""
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1734983447/products/Jalape%C3%83%C2%B1o-Beef-Fries.jpg",
  "basePrice": 125,
  "productType": "appetizers",
  "categoryId": { "$oid" : "66e04a35696c11c8efd90c00"},
  "topselling": true,
  "sizes": [],
  "breadTypes": [],
  "combos": [],
  "extras": [],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},
/* 5th */
{
  "_id": {"$oid" : "677042b6c65bac471436b527"},
  "name": {
    "en": "Thousand Island Sauce",
    "ar": "صوص ثاوزند ايلاند"
  },
  "description": {
    "en": "",
    "ar": ""
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1735410228/products/ThousandIslanSauce.jpg",
  "basePrice": 10,
  "productType": "sauce",
  "categoryId": { "$oid" : "66e14fe884ae56a6684cc6bd"},
  "topselling": true,
  "sizes": [],
  "breadTypes": [],
  "combos": [],
  "extras": [],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},
/* 6th */
{
  "_id": {"$oid" : "67704794c65bac471436b529"},
  "name": {
    "en": "Blueberry Cheesecake",
    "ar": "بلوبيري تشييزكيك"
  },
  "description": {
    "en": "",
    "ar": ""
  },
  "image": "https://res.cloudinary.com/djezf7wtn/image/upload/v1735411306/products/BlueberryCheesecake.jpg",
  "basePrice": 75,
  "productType": "Dessert",
  "categoryId": { "$oid" : "670a5758b19cb207af187600"},
  "topselling": true,
  "sizes": [],
  "breadTypes": [],
  "combos": [],
  "extras": [],
  "createdAt": "2024-12-23T19:30:44.578+00:00"
},

];


export default myproducts;

