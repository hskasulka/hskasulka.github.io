import React from 'react';
import { Typography, Image } from 'antd';
import ContentBlock from '@layouts/ContentBlock';
import TitleCard from '@layouts/TitleCard';
import LinkItem from '@components/LinkItem';
import BackToTop from '@components/BackToTop';

import '@styles/ProjectPage.css';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

import mothTitle from '@assets/moth/moth0.png';
import moth1 from '@assets/moth/moth1.png';
import moth2 from '@assets/moth/moth2.png';
import moth3 from '@assets/moth/moth3.png';
import moth4 from '@assets/moth/moth4.png';
import moth5 from '@assets/moth/moth5.png';
import moth6 from '@assets/moth/moth6.jpg';
import moth7 from '@assets/moth/moth7.png';
import moth8 from '@assets/moth/moth8.png';
import moth9 from '@assets/moth/moth9.png';
import moth10 from '@assets/moth/moth10.png';


const { Paragraph } = Typography;

const ModelOfTheHeavens: React.FC = () => {
  return (
    <>
        <TitleCard
            title="Model of the Heavens"
            description="A mechanical reinterpretation of the classic heliocentric model of the solar system. Powered by gravity and transforming motion through classic mechanisms"
            imageUrl={mothTitle}
        />
        <div className="project-section text-only">
            <Paragraph className="project-text">
                During the Winter 2025 quarter of my time at Stanford, I began my sequence of classes in
                Stanford’s Product Realization Lab (PRL). The first of these classes is ME 102: Foundations of
                Product Realization, a class that looks at how we observe, read, and interact with products in
                our daily lives, and how we can make decisions as designers to optimize how a product's
                function and purpose is communicated. The class also provided a deep dive into mechanisms:
                simple mechanisms and how they work, how to transform types of motion / work into other
                forms, and built up our mechanical intuition to look at something and understand how it works.
            </Paragraph>
            <Paragraph className="project-text">
                For around eight weeks, my team and I took an existing product, analyzed it, improved it, and
                then went through the process of prototyping, iterating, manufacturing and assembling it.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={moth1}
                alt="Inspiration photo for the planetary model we made"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                It all started with a planetary model like this, or a “Model of the Heavens” as our professor liked
                to call it. From this existing model, we began analyzing it and going through the MEDGI design
                process. This process had to look at different features and traits from a product, interact with it
                from a user’s perspective and create user stories from those interactions. From there we
                “disrupted” and questioned “what happens if” we changed certain things about the design, or the
                interactions, and then answered those questions, with definitive new solutions that modified the
                existing design. This was a cyclical process and as the class progressed, we continually came
                back to MEDGI to analyze our designs in their current state, and help make
                improvements/progress when things slowed down.
            </Paragraph>
        </div>
        <ContentBlock>
            <Image
                src={moth2}
                alt="First sketch of initial model design"
                preview={false}
                className="project-image"
            />
            <Image
                src={moth3}
                alt="Second sketch of planetary model design"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <ContentBlock>
            <Image
                src={moth4}
                alt="Third sketch of planetary model design"
                preview={false}
                className="project-image"
            />
            <Image
                src={moth5}
                alt="Final sketch of planetary model design"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                One of the big changes our team settled on was to redesign the heliocentric model and
                implement functionality to model the Big Bang / Big Crunch theory, where the planets instead of
                maintaining circular orbits would rather converge on the center.
            </Paragraph>
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                With plans in the works, our team began with prototyping our
                design out of cardboard, hot glue, and other available materials.
                Via this process, we were able to verify our critical mechanism, a
                spiral cam and follower that allowed the planets to converge on the
                center, translating rotational motion to linear motion. While it was
                certainly rough doing all the cardboard cutting by hand, it proved
                that our idea was possible.
            </Paragraph>
            <Image
                src={moth6}
                alt="Cardboard model of an early version of the planetary model"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <ContentBlock>
            <Image
                src={moth7}
                alt="Critical mechanism, made using 3D printing and laser cutting"
                preview={false}
                className="project-image"
            />
            <Paragraph className="project-text">
                After this initial prototyping phase, we were able to
                move onto using machines to help us manufacture
                our design. We were now allowed to use 3D-printers
                and laser cutters, courtesy of the PRL, which at this
                point, we needed to dive deep into CAD. I became
                an expert at Fusion 360 and did much of the CAD
                work for the group for the duration of the project. We
                began by once again verifying our critical
                mechanism, this time modeling in CAD and printing it
                on Bambu printers. For many of our 2D parts, such
                as the cam, followers, and mounting boards for all
                the pieces, we used a laser cutter, converting our
                models to 2D sketches, and cutting them out of
                acrylic and MDF.
            </Paragraph>
        </ContentBlock>
        <ContentBlock>
            <Paragraph className="project-text">
                With only a couple weeks left in the class, we
                designed the rest of the parts, assembled, tested, and
                iterated a couple more times before we submitted our
                finished product. Our final model was made up from
                numerous different 3D printed and laser cut parts. The
                central feature is the spiral cam and follower, front and
                center. When the cam spins, the followers converge
                on the center, which also causes the planets to spin
                via a rack and pinion under each follower. This whole
                system was powered by a giant bevel gear, which
                engaged with one of two bevel gears on another axel
                hidden beneath the cam. This axel not only rotated,
                but moved back and forth. This way, the user could
                engage one bevel or the other, causing it to spin
                inward or outward. And on the end of the axel was a 
                weight which powered the whole system by gravity.
            </Paragraph>
            <Image
                src={moth8}
                alt="Rendering of the final planetary model"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section image-only">
            <Image
                src={moth9}
                alt="Hero shot of the final model of the heavens"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                It was a challenging class, consisting of many late nights, and pivots when things didn’t go to
                plan. But overall, it was a great class to hone my CAD skills, become better at creating
                assemblies, and gave us great mechanical intuition to understand how machines work.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
            src={moth10}
            alt="Picture of the team, posing with the ME 102 sign"
            preview={false}
            className="project-image project-image-only"
            />
        </div>
        <div className="project-pdf-links">
          <LinkItem
            href="https://drive.google.com/file/d/1G_YUStYxnPM_YxufPne9OUvlpXiW4qX7/view?usp=sharing"
            icon={faFilePdf}
            label="Final Submission"
          />
          <LinkItem
            href="https://drive.google.com/file/d/1aGHh9i-aNvRq-e-EC6-YhM7fXOeZnIne/view?usp=sharing"
            icon={faFilePdf}
            label="Exploded View & Parts List"
          />
      </div>
      <BackToTop/>
    </>
  );
};

export default ModelOfTheHeavens;