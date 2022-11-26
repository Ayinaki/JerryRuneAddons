import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty
} from '../Vigilance/index';

@Vigilant("JerryRuneAddons", "JerryRuneAddons", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", 
            "&4&lJerryRuneAddons\n\n" +
            "\n" +
            "&6Discord.gg/JerryRune"
        )
    }

    // ---------------------------------------------------------------
    // General

    @SwitchProperty({
        name: "Hide Falling Blocks",
        description: "Stops Falling Blocks From Being Rendered.",
        category: "General",
        subcategory: "Falling Blocks"
    })
    hideFallingBlocks = false

}
export default new Config()