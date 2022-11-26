import Config from "../Config"

register("RenderEntity", (x) => x.getName() === "Falling Block" && Config.hideFallingBlocks && x.getEntity().func_70106_y())