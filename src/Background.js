import { Config } from './Config';

/**
 * Create some background graphics for visual reference
 */
export function BackgroundAnimation() {
    Config.BACK_GROUND = new p5.Group();

    for (let i = 0; i < 10; i++) {
        //create a sprite and add the 3 animations
        let planets = p5.createSprite(p5.random(p5.width), p5.random(p5.height));
        let stars = p5.createSprite(p5.random(p5.width), p5.random(p5.height));
        //cycles through rocks 0 1 2
        planets.addAnimation('normal', '../assets/space/far-planets.png');
        stars.addAnimation('normal', '../assets/space/stars.png');
        Config.BACK_GROUND.add(planets);
        Config.BACK_GROUND.add(stars);
    }
    Config.BACK_GROUND.forEach((backgroundImg) => {
        backgroundImg.setSpeed(backgroundImg.mass * 3.5, 90);
    });
}
