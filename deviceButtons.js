  // 검색어 추가 기능 버튼 클릭 시 검색창에 검색어 추가
  $(".zigbeeButton").on("click", function() {
    var keyword = "Zigbee";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".zwaveButton").on("click", function() {
    var keyword = "Z-Wave";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".matterButton").on("click", function() {
    var keyword = "Matter";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".threadButton").on("click", function() {
    var keyword = "Thread";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".wifiButton").on("click", function() {
    var keyword = "Wi-Fi";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".lanButton").on("click", function() {
    var keyword = "LAN";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });
    
  $(".RS-485Button").on("click", function() {
    var keyword = "RS-485";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });
    
  $(".galaxyfindnetworksButton").on("click", function() {
    var keyword = "Galaxy Find Networks";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".RFButton").on("click", function() {
    var keyword = "RF";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".airQualityButton").on("click", function() {
    var keyword = "Air Quality sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".airDresserButton").on("click", function() {
    var keyword = "Air Dresser";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });
    
  $(".airPurifierButton").on("click", function() {
    var keyword = "Air Purifier";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });
    
  $(".arrivalButton").on("click", function() {
    var keyword = "Arrival sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".AVButton").on("click", function() {
    var keyword = "AV";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".BESPOKEButton").on("click", function() {
    var keyword = "BESPOKE";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".buttonButton").on("click", function() {
    var keyword = "Button";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".cameraButton").on("click", function() {
    var keyword = "Camera";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".ceilinglightButton").on("click", function() {
    var keyword = "Ceiling Light";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".cooktopButton").on("click", function() {
    var keyword = "Cooktop";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });
    
  $(".doorlockButton").on("click", function() {
    var keyword = "Door lock";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

  $(".hubButton").on("click", function() {
    var keyword = "Hub";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
      $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
      $(".myInput").val(inputValue + keyword + " ");
    } else {
      $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
  });

$(".dehumidifierButton").on("click", function() {
    var keyword = "Dehumidifier";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".dishwasherButton").on("click", function() {
    var keyword = "Dishwasher";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".hoodButton").on("click", function() {
    var keyword = "Hood";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".laundryButton").on("click", function() {
    var keyword = "Laundry";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".ovenButton").on("click", function() {
    var keyword = "Oven";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".rangeButton").on("click", function() {
    var keyword = "Range";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".refrigeratorButton").on("click", function() {
    var keyword = "Refrigerator";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".robotVacuumButton").on("click", function() {
    var keyword = "Robot Vacuum";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".shoeDresserButton").on("click", function() {
    var keyword = "Shoe Dresser";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".vacuumButton").on("click", function() {
    var keyword = "Vacuum";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".doorWindowSensorButton").on("click", function() {
    var keyword = "Door and Window sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".energymeterButton").on("click", function() {
    var keyword = "Energymeter";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".lightButton").on("click", function() {
    var keyword = "Light";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".motionSensorButton").on("click", function() {
    var keyword = "Motion sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".outletButton").on("click", function() {
    var keyword = "Outlet";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".presenceSensorButton").on("click", function() {
    var keyword = "Presence sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".smartPlugButton").on("click", function() {
    var keyword = "Smart plug";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".soundSensorButton").on("click", function() {
    var keyword = "Sound Sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".switchButton").on("click", function() {
    var keyword = "Switch";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".tagButton").on("click", function() {
    var keyword = "Tag";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".temperatureSensorButton").on("click", function() {
    var keyword = "Temperature sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".vibrationSensorButton").on("click", function() {
    var keyword = "Vibration sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".visionSensorButton").on("click", function() {
    var keyword = "Vision sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".waterLeakSensorButton").on("click", function() {
    var keyword = "Water leak Sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});


$(".wirelessChargerButton").on("click", function() {
    var keyword = "Wireless charger";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".humiditySensorButton").on("click", function() {
    var keyword = "Humidity sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".illuminationSensorButton").on("click", function() {
    var keyword = "Illumination sensor";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".remoteButton").on("click", function() {
    var keyword = "Remote";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".riceCookerButton").on("click", function() {
    var keyword = "Rice Cooker";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".smartSpeakerButton").on("click", function() {
    var keyword = "Smart Speaker";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".thermostatButton").on("click", function() {
    var keyword = "Thermostat";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});

$(".windowTreatmentButton").on("click", function() {
    var keyword = "Window treatment";
    var inputValue = $(".myInput").val().trim();
    
    if (inputValue === "") {
        $(".myInput").val("#" + keyword + " ");
    } else if (inputValue === "#") {
        $(".myInput").val(inputValue + keyword + " ");
    } else {
        $(".myInput").val(inputValue + " #" + keyword + " ");
    }
    $(".myInput").trigger("keyup");
});
