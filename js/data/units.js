var selectionOptions = {
	"Temperature": ["celsius", "fahrenheit"],
	"Length": ["kilometer", "meters"],
	"Mass": ["metricTon", "kilogram"],
	"Speed": ["milesHour", "feetSec"],
	"Volume": ["usGal", "usQuart"],
	"Area": ["squareKm", "hectare"],
	"Fuel_Consumption": ["mpgUs", "mpgImp"],
	"Time": ["nanoseconds", "microseconds"],
	"Digital_Storage": ["bits", "bytes"],
	"Energy": ["btuTh", "btuMean"],
	"Power": ["watts", "kilowatts"],
	"Force": ["newtons", "kilonewtons"],
	"Electric_Current": ["abampere", "ampere"]
};

var units = {
	"Temperature": {
		"celsius": {
			"scale": function(value) {
				return (value + 273.15);
			},
			"scaleFrom": function(value) {
				return (value - 273.15);
			},
			"symbol": "",
			"name": "Celsius"
		},
		"fahrenheit": {
			"scale": function(value) {
				return (5 / 9 * (value + 459.67));
			},
			"scaleFrom": function(value) {
				return (9 / 5 * value - 459.67);
			},
			"symbol": "",
			"name": "Fahrenheit"
		},
		"kelvin": {
			"scale": 1,
			"symbol": "",
			"name": "Kelvin"
		}
	},
	"Length": {
		"kilometer": {
			"scale": 1000,
			"symbol": "",
			"name": "Kilometer"
		},
		"meters": {
			"scale": 1,
			"symbol": "",
			"name": "Meters"
		},
		"centimeters": {
			"scale": 0.01,
			"symbol": "",
			"name": "Centimeters"
		},
		"millimeters": {
			"scale": 0.001,
			"symbol": "",
			"name": "Millimeters"
		},
		"miles": {
			"scale": 1609.344,
			"symbol": "",
			"name": "Miles"
		},
		"yards": {
			"scale": 0.9144,
			"symbol": "",
			"name": "Yards"
		},
		"feet": {
			"scale": 0.3048006096012192,
			"symbol": "",
			"name": "Feet"
		},
		"inches": {
			"scale": 0.0254,
			"symbol": "",
			"name": "Inches"
		},
		"nauticalMiles": {
			"scale": 1852,
			"symbol": "",
			"name": "Nautical Miles"
		}
	},
	"Mass": {
		"metricTon": {
			"scale": 1000,
			"symbol": "",
			"name": "Metric Ton"
		},
		"kilogram": {
			"scale": 1,
			"symbol": "",
			"name": "Kilogram"
		},
		"gram": {
			"scale": 0.001,
			"symbol": "",
			"name": "Gram"
		},
		"milligram": {
			"scale": 0.000001,
			"symbol": "",
			"name": "Milligram"
		},
		"mcg": {
			"scale": 1e-9,
			"symbol": "",
			"name": "Mcg"
		},
		"longTon": {
			"scale": 1016.0469088,
			"symbol": "",
			"name": "Long Ton"
		},
		"shortTon": {
			"scale": 907.18474,
			"symbol": "",
			"name": "Short Ton"
		},
		"stones": {
			"scale": 6.35029318,
			"symbol": "",
			"name": "Stones"
		},
		"pound": {
			"scale": 0.45359237,
			"symbol": "",
			"name": "Pound"
		},
		"ounce": {
			"scale": 0.028349523125,
			"symbol": "",
			"name": "Ounce"
		}
	},
	"Speed": {
		"milesHour": {
			"scale": 0.44704,
			"symbol": "",
			"name": "Miles/Hour"
		},
		"feetSec": {
			"scale": 0.3048,
			"symbol": "",
			"name": "Feet/Sec"
		},
		"metersSec": {
			"scale": 1,
			"symbol": "",
			"name": "Meters/Sec"
		},
		"kmHour": {
			"scale": 0.2777777777777778,
			"symbol": "",
			"name": "Km/Hour"
		},
		"knots": {
			"scale": 0.5144444444444445,
			"symbol": "",
			"name": "Knots"
		}
	},
	"Volume": {
		"usGal": {
			"scale": 3.785411784,
			"symbol": "",
			"name": "US Gal"
		},
		"usQuart": {
			"scale": 0.946352946,
			"symbol": "",
			"name": "US Quart"
		},
		"usPint": {
			"scale": 0.473176473,
			"symbol": "",
			"name": "US Pint"
		},
		"usCup": {
			"scale": 0.2365882365,
			"symbol": "",
			"name": "US Cup"
		},
		"usOz": {
			"scale": 0.0295735295625,
			"symbol": "",
			"name": "US Oz"
		},
		"usTbsp": {
			"scale": 0.01478676478125,
			"symbol": "",
			"name": "US Tbsp."
		},
		"usTsp": {
			"scale": 0.00492892159375,
			"symbol": "",
			"name": "US Tsp."
		},
		"cubicMeter": {
			"scale": 1000,
			"symbol": "",
			"name": "Cubic Meter"
		},
		"liters": {
			"scale": 1,
			"symbol": "",
			"name": "Liters"
		},
		"milliliter": {
			"scale": 0.001,
			"symbol": "",
			"name": "Milliliter"
		},
		"imperialGal": {
			"scale": 4.54609,
			"symbol": "",
			"name": "Imperial Gal"
		},
		"imperialQuart": {
			"scale": 1.1365225,
			"symbol": "",
			"name": "Imperial Quart"
		},
		"imperialPint": {
			"scale": 0.56826125,
			"symbol": "",
			"name": "Imperial Pint"
		},
		"imperialOz": {
			"scale": 0.0284130625,
			"symbol": "",
			"name": "Imperial Oz"
		},
		"imperialTbsp": {
			"scale": 0.0177582,
			"symbol": "",
			"name": "Imperial Tbsp."
		},
		"imperialTsp": {
			"scale": 0.00591939,
			"symbol": "",
			"name": "Imperial Tsp."
		},
		"cubicFoot": {
			"scale": 28.316846592,
			"symbol": "",
			"name": "Cubic Foot"
		},
		"cubicInch": {
			"scale": 0.016387064,
			"symbol": "",
			"name": "Cubic Inch"
		}
	},
	"Area": {
		"squareKm": {
			"scale": 1000000,
			"symbol": "",
			"name": "Square Km"
		},
		"hectare": {
			"scale": 10000,
			"symbol": "",
			"name": "Hectare"
		},
		"squareMeter": {
			"scale": 1,
			"symbol": "",
			"name": "Square Meter"
		},
		"squareMile": {
			"scale": 2589988.110336,
			"symbol": "",
			"name": "Square Mile"
		},
		"acre": {
			"scale": 4046.8564224,
			"symbol": "",
			"name": "Acre"
		},
		"squareYard": {
			"scale": 0.83612736,
			"symbol": "",
			"name": "Square Yard"
		},
		"squareFoot": {
			"scale": 0.09290304,
			"symbol": "",
			"name": "Square Foot"
		},
		"squareInch": {
			"scale": 0.00064516,
			"symbol": "",
			"name": "Square Inch"
		}
	},
	"Fuel_Consumption": {
		"mpgUs": {
			"scale": function(value) {
				return 2.3521458333333333333333333333333e-3 / value;
			},
			"scaleFrom" : function(value) {
				return 2.3521458333333333333333333333333e-3 / value;
			},
			"symbol": "",
			"name": "MPG (US)"
		},
		"mpgImp": {
			"scale": function(value) {
				return 2.8248093633182215859381213711925e-3 / value;
			},
			"scaleFrom": function(value) {
				return 2.8248093633182215859381213711925e-3 / value;
			},
			"symbol": "",
			"name": "MPG (imp.)"
		},
		"kmLiter": {
			"scale": function(value) {
				return 0.001 / value;
			},
			"scaleFrom": function(value) {
				return 0.001 / value;
			},
			"symbol": "",
			"name": "Km/Liter"
		},
		"liter100km": {
			"scale": 0.00001,
			"symbol": "",
			"name": "Liter/100km"
		}
	},
	"Time": {
		"nanoseconds": {
			"scale": 1e-9,
			"symbol": "",
			"name": "Nanoseconds"
		},
		"microseconds": {
			"scale": 0.000001,
			"symbol": "",
			"name": "Microseconds"
		},
		"milliseconds": {
			"scale": 0.001,
			"symbol": "",
			"name": "Milliseconds"
		},
		"seconds": {
			"scale": 1,
			"symbol": "",
			"name": "Seconds"
		},
		"minutes": {
			"scale": 60,
			"symbol": "",
			"name": "Minutes"
		},
		"hours": {
			"scale": 3600,
			"symbol": "",
			"name": "Hours"
		},
		"days": {
			"scale": 86400,
			"symbol": "",
			"name": "Days"
		},
		"weeks": {
			"scale": 604800,
			"symbol": "",
			"name": "Weeks"
		},
		"months": {
			"scale": 2628000,
			"symbol": "",
			"name": "Months"
		},
		"years": {
			"scale": 31536000,
			"symbol": "",
			"name": "Years"
		},
		"decades": {
			"scale": 315360000,
			"symbol": "",
			"name": "Decades"
		},
		"century": {
			"scale": 3.1689e-10,
			"symbol": "",
			"name": "Century"
		}
	},
	"Digital_Storage": {
		"bits": {
			"scale": 0.125,
			"symbol": "",
			"name": "Bits"
		},
		"bytes": {
			"scale": 1,
			"symbol": "",
			"name": "Bytes"
		},
		"kilobits": {
			"scale": 128,
			"symbol": "",
			"name": "Kilobits"
		},
		"kilobytes": {
			"scale": 1024,
			"symbol": "",
			"name": "Kilobytes"
		},
		"megabits": {
			"scale": 131072,
			"symbol": "",
			"name": "Megabits"
		},
		"megabytes": {
			"scale": 1048576,
			"symbol": "",
			"name": "Megabytes"
		},
		"gigabits": {
			"scale": 134217728,
			"symbol": "",
			"name": "Gigabits"
		},
		"gigabytes": {
			"scale": 1073741824,
			"symbol": "",
			"name": "Gigabytes"
		},
		"terabits": {
			"scale": 137438953472,
			"symbol": "",
			"name": "Terabits"
		},
		"terabytes": {
			"scale": 1099511627776,
			"symbol": "",
			"name": "Terabytes"
		},
		"petabits": {
			"scale": 140737488355328,
			"symbol": "",
			"name": "Petabits"
		},
		"petabytes": {
			"scale": 1125899906842624,
			"symbol": "",
			"name": "Petabytes"
		},
		"exabits": {
			"scale": 144115188075855870,
			"symbol": "",
			"name": "Exabits"
		},
		"exabytes": {
			"scale": 1152921504606847000,
			"symbol": "",
			"name": "Exabytes"
		}
	},
	"Energy": {
		"btuTh": {
			"scale": 1054.35,
			"symbol": "",
			"name": "Btu (th)"
		},
		"btuMean": {
			"scale": 1055.87,
			"symbol": "",
			"name": "Btu (mean)"
		},
		"caloriesIt": {
			"scale": 4.1868,
			"symbol": "",
			"name": "Calories (IT)"
		},
		"caloriesTh": {
			"scale": 4.184,
			"symbol": "",
			"name": "Calories (th)"
		},
		"caloriesMean": {
			"scale": 4.19002,
			"symbol": "",
			"name": "Calories (mean)"
		},
		"calories15c": {
			"scale": 4.1858,
			"symbol": "",
			"name": "Calories (15C)"
		},
		"calories20c": {
			"scale": 4.1819,
			"symbol": "",
			"name": "Calories (20C)"
		},
		"caloriesFood": {
			"scale": 4186,
			"symbol": "",
			"name": "Calories (food)"
		},
		"centigradeHeatUnits": {
			"scale": 1900.4,
			"symbol": "",
			"name": "Centigrade Heat Units"
		},
		"electronVolts": {
			"scale": 1.60219e-19,
			"symbol": "",
			"name": "Electron Volts"
		},
		"ergs": {
			"scale": 1e-7,
			"symbol": "",
			"name": "Ergs"
		},
		"footPoundForce": {
			"scale": 1.3558179483314003,
			"symbol": "",
			"name": "Foot-Pound Force"
		},
		"footPoundals": {
			"scale": 0.04214,
			"symbol": "",
			"name": "Foot Poundals"
		},
		"gigajoules": {
			"scale": 1000000000,
			"symbol": "",
			"name": "Gigajoules"
		},
		"horsepowerHours": {
			"scale": 2684520,
			"symbol": "",
			"name": "Horsepower Hours"
		},
		"inchPoundForce": {
			"scale": 0.11298482902761668,
			"symbol": "",
			"name": "Inch-Pound Force"
		},
		"joules": {
			"scale": 1,
			"symbol": "",
			"name": "Joules"
		},
		"kilocaloriesIt": {
			"scale": 4186.8,
			"symbol": "",
			"name": "Kilocalories (IT)"
		},
		"kilocaloriesTh": {
			"scale": 4184,
			"symbol": "",
			"name": "Kilocalories (th)"
		},
		"kilogramForceMeters": {
			"scale": 9.80665,
			"symbol": "",
			"name": "Kilogram-Force Meters"
		},
		"kilojoules": {
			"scale": 1000,
			"symbol": "",
			"name": "Kilojoules"
		},
		"kilowattHours": {
			"scale": 3600000,
			"symbol": "",
			"name": "Kilowatt Hours"
		},
		"megajoules": {
			"scale": 1000000,
			"symbol": "",
			"name": "Megajoules"
		},
		"newtonMeters": {
			"scale": 1,
			"symbol": "",
			"name": "Newton Meters"
		},
		"therms": {
			"scale": 105505585.257348,
			"symbol": "",
			"name": "Therms"
		},
		"wattSeconds": {
			"scale": 1,
			"symbol": "",
			"name": "Watt Seconds"
		},
		"wattHours": {
			"scale": 3600,
			"symbol": "",
			"name": "Watt Hours"
		}
	},
	"Power": {
		"watts": {
			"scale": 1,
			"symbol": "",
			"name": "Watts"
		},
		"kilowatts": {
			"scale": 1000,
			"symbol": "",
			"name": "Kilowatts"
		},
		"megawatts": {
			"scale": 1000000,
			"symbol": "",
			"name": "Megawatts"
		},
		"gigawatts": {
			"scale": 1000000000,
			"symbol": "",
			"name": "Gigawatts"
		},
		"btuHour": {
			"scale": 0.293071,
			"symbol": "",
			"name": "Btu/Hour"
		},
		"btuMinute": {
			"scale": 17.584267,
			"symbol": "",
			"name": "Btu/Minute"
		},
		"btuSecond": {
			"scale": 1055.056,
			"symbol": "",
			"name": "Btu/Second"
		},
		"caloriesthHour": {
			"scale": 0.001162222222222222,
			"symbol": "",
			"name": "Calories(th)/Hour"
		},
		"caloriesthMinute": {
			"scale": 0.06973333333333333,
			"symbol": "",
			"name": "Calories(th)/Minute"
		},
		"caloriesthSecond": {
			"scale": 4.184,
			"symbol": "",
			"name": "Calories(th)/Second"
		},
		"kilocaloriesthHour": {
			"scale": 1.1622222222222223,
			"symbol": "",
			"name": "Kilocalories(th)/Hour"
		},
		"kilocaloriesthMinute": {
			"scale": 69.73333333333333,
			"symbol": "",
			"name": "Kilocalories(th)/Minute"
		},
		"footPoundsForceMinute": {
			"scale": 0.022597,
			"symbol": "",
			"name": "Foot Pounds-Force/Minute"
		},
		"footPoundsForceSecond": {
			"scale": 1.35582,
			"symbol": "",
			"name": "Foot Pounds-Force/Second"
		},
		"horsepowersElectric": {
			"scale": 746,
			"symbol": "",
			"name": "Horsepowers (electric)"
		},
		"horsepowersInternational": {
			"scale": 745.6998715822702,
			"symbol": "",
			"name": "Horsepowers (international)"
		},
		"horsepowersWater": {
			"scale": 746.043,
			"symbol": "",
			"name": "Horsepowers (water)"
		},
		"horsepowersMetric": {
			"scale": 735.4988,
			"symbol": "",
			"name": "Horsepowers (metric)"
		},
		"joulesHour": {
			"scale": 0.0002777777777777778,
			"symbol": "",
			"name": "Joules/Hour"
		},
		"joulesMinute": {
			"scale": 0.016666666666666666,
			"symbol": "",
			"name": "Joules/Minute"
		},
		"joulesSecond": {
			"scale": 1,
			"symbol": "",
			"name": "Joules/Second"
		},
		"kilogramForceMetersHour": {
			"scale": 0.002724,
			"symbol": "",
			"name": "Kilogram-Force Meters/Hour"
		},
		"kilogramForceMetersMinute": {
			"scale": 0.163444,
			"symbol": "",
			"name": "Kilogram-Force Meters/Minute"
		}
	},
	"Force": {
		"newtons": {
			"scale": 1,
			"symbol": "",
			"name": "Newtons"
		},
		"kilonewtons": {
			"scale": 1000,
			"symbol": "",
			"name": "Kilonewtons"
		},
		"meganewtons": {
			"scale": 1000000,
			"symbol": "",
			"name": "Meganewtons"
		},
		"dynes": {
			"scale": 0.00001,
			"symbol": "",
			"name": "Dynes"
		},
		"kilogramsForce": {
			"scale": 9.80665,
			"symbol": "",
			"name": "Kilograms Force"
		},
		"kips": {
			"scale": 4448.222,
			"symbol": "",
			"name": "Kips"
		},
		"poundsForce": {
			"scale": 4.4482216152605,
			"symbol": "",
			"name": "Pounds Force"
		},
		"poundals": {
			"scale": 0.138255,
			"symbol": "",
			"name": "Poundals"
		},
		"sthenes=kn": {
			"scale": 1000,
			"symbol": "",
			"name": "Sthenes (=kN)"
		},
		"tonnesForce": {
			"scale": 9806.65,
			"symbol": "",
			"name": "Tonnes Force"
		},
		"tonsForceUk": {
			"scale": 9964.01641818352,
			"symbol": "",
			"name": "Tons Force (UK)"
		},
		"tonsForceUs": {
			"scale": 8896.443230521,
			"symbol": "",
			"name": "Tons Force (US)"
		}
	},
	"Electric_Current": {
		"abampere": {
			"scale": 10,
			"symbol": "",
			"name": "Abampere"
		},
		"ampere": {
			"scale": 1,
			"symbol": "",
			"name": "Ampere"
		},
		"biot": {
			"scale": 10,
			"symbol": "",
			"name": "Biot"
		},
		"centiampere": {
			"scale": 0.01,
			"symbol": "",
			"name": "Centiampere"
		},
		"coulombSecond": {
			"scale": 1,
			"symbol": "",
			"name": "Coulomb/Second"
		},
		"emuOfCurrent": {
			"scale": 10,
			"symbol": "",
			"name": "EMU Of Current"
		},
		"esuOfCurrent": {
			"scale": 3.335641e-10,
			"symbol": "",
			"name": "ESU Of Current"
		},
		"franklinSecond": {
			"scale": 3.335641e-10,
			"symbol": "",
			"name": "Franklin/Second"
		},
		"gaussianElectricCurrent": {
			"scale": 3.335641e-10,
			"symbol": "",
			"name": "Gaussian Electric Current"
		},
		"gigaampere": {
			"scale": 1000000000,
			"symbol": "",
			"name": "Gigaampere"
		},
		"gilbert": {
			"scale": 0.79577472,
			"symbol": "",
			"name": "Gilbert"
		},
		"kiloampere": {
			"scale": 1000,
			"symbol": "",
			"name": "Kiloampere"
		},
		"megaampere": {
			"scale": 1000000,
			"symbol": "",
			"name": "Megaampere"
		},
		"microampere": {
			"scale": 0.000001,
			"symbol": "",
			"name": "Microampere"
		},
		"milliampere": {
			"scale": 0.001,
			"symbol": "",
			"name": "Milliampere"
		},
		"milliamp": {
			"scale": 0.001,
			"symbol": "",
			"name": "Milliamp"
		},
		"manoampere": {
			"scale": 1e-9,
			"symbol": "",
			"name": "Manoampere"
		},
		"picoampere": {
			"scale": 1e-12,
			"symbol": "",
			"name": "Picoampere"
		},
		"siemensVolt": {
			"scale": 1,
			"symbol": "",
			"name": "Siemens Volt"
		},
		"statampere": {
			"scale": 3.335641e-10,
			"symbol": "",
			"name": "Statampere"
		},
		"teraampere": {
			"scale": 1000000000000,
			"symbol": "",
			"name": "Teraampere"
		},
		"voltOhm": {
			"scale": 1,
			"symbol": "",
			"name": "Volt/Ohm"
		},
		"wattVolt": {
			"scale": 1,
			"symbol": "",
			"name": "Watt/Volt"
		},
		"weberHenry": {
			"scale": 1,
			"symbol": "",
			"name": "Weber/Henry"
		}
	}
};