// mlx90614
Blockly.Blocks["mlx90614_read_ambient_temp"] = {
  init: function() {
    this.jsonInit({
      message0: 'đọc nhiệt độ môi trường',
      args0: '',
      output: null,
      colour: "#33aaaa",
    });
  }
};

Blockly.Python["mlx90614_read_ambient_temp"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_mlx90614"] = "from mlx90614 import *";
  Blockly.Python.definitions_["init_mlx90614"] = "mlx = MLX90614()";
  var code = "mlx.read_ambient_temp()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["mlx90614_read_object_temp"] = {
  init: function() {
    this.jsonInit({
      message0: 'đọc nhiệt độ cơ thể',
      args0: '',
      output: null,
      colour: "#33aaaa",
    });
  }
};

Blockly.Python["mlx90614_read_object_temp"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_mlx90614"] = "from mlx90614 import *";
  Blockly.Python.definitions_["init_mlx90614"] = "mlx = MLX90614()";
  
  var code = "mlx.read_object_temp()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
