import React from 'react';
import { Typography, Image } from 'antd';
import ContentBlock from '@layouts/ContentBlock';
import TitleCard from '@layouts/TitleCard';
import LinkItem from '@components/LinkItem';
import BackToTop from '@components/BackToTop';

import '@styles/ProjectPage.css';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

import cgTitle from '@assets/cg/cg-0.png';
import cg1 from '@assets/cg/cg-1.jpg';
import cg2 from '@assets/cg/cg-2.png';
import cg3 from '@assets/cg/cg-3.jpg';
import cg4 from '@assets/cg/cg-4.png';
import cg5 from '@assets/cg/cg-5.png';
import cg6 from '@assets/cg/cg-6.jpg';
import cg7 from '@assets/cg/cg-7.png';
import cg8 from '@assets/cg/cg-8.png';
import cg9 from '@assets/cg/cg-9.png';
import cg10 from '@assets/cg/cg-10.png';
import cg11 from '@assets/cg/cg-11.jpg';

const { Paragraph } = Typography;

const CampGrill: React.FC = () => {
  return (
    <>
        <TitleCard
            title="Ultralight Camp Grill"
            description="A lightweight, modular backpacking grill designed and fabricated through manual machining for ME 103: Design and Making in the Product Realization Lab."
            imageUrl={cgTitle}
        />
        <div className="project-section text-only">
        <Paragraph className="project-text">
            During my Spring 2025 quarter at Stanford, I was able to take one of the schools most famous
            classes in the Product Realization Lab (PRL), called “Design and Making”. This coveted course
            walks students through the entire product realization process, from ideating, narrowing down
            potential projects, creating a project story, prototyping, and then going forward with
            manufacturing and finishing using manual machining.
        </Paragraph>
      </div>
      <ContentBlock>
        <Paragraph className="project-text">
            It started with an overarching goal, I wanted to
            make something relating to the outdoors. I grew
            up doing all sorts of outdoor activities, whether
            that was camping, hiking, biking, or skiing, I had
            grown fond of spending time outdoors and
            wanted my academic interests to complement
            that. After much ideation, I decided I wanted to
            make a lightweight camping grill, with a focus
            on ease of assembly/disassembly. I ended up
            using a design consisting of four machined
            aluminum bars that construct a perimeter of the
            grill, with included holes to slot in the steel rods.
            This way, it allows you to build a large square
            foot grill bed, while easily compacting down into
            a handful of thin rods/bars.
        </Paragraph>
        <Image
          src={cg1}
          alt="Initial sketches of the camp grill"
          preview={false}
          className="project-image"
        />
      </ContentBlock>
      <ContentBlock>
        <Paragraph className="project-text">
            One of the defining features I wanted to create
            were these angled threads at all the corners, that
            allowed the grill to be pitched up and stable. In
            this way, the thread was tilted off-axis in two axes
            to pitch away from the center, and my wow factor
            was I was going to do this all using manual
            machining. This was the critical part and where I
            spent a lot of my prototyping time, figuring out
            how I would machine something like this using
            manual tools. <br/><br/>
            I ended up experimenting a lot with custom jigs
            using 3D printing. I had already been an expert in
            3D printing and had developed the CAD models
            for my parts, so it was not a lot more work to
            develop this custom fixturing. I first played with
            some rudimentary prototypes then worked on
            developing the actual fixturing I was hoping to
            use.
        </Paragraph>
        <Image
          src={cg2}
          alt="Alumnium rod with off-pitch cylinder coming out"
          preview={false}
          className="project-image"
        />
      </ContentBlock>
      <div className="project-section image-only">
        <Image
          src={cg3}
          alt="3D-Printed custom jigs for achieving angled cut"
          preview={false}
          className="project-image project-image-only"
        />
      </div>
      <ContentBlock>
        <Image
          src={cg4}
          alt="Sample of the Operations Sequence"
          preview={false}
          className="project-image"
        />
        <Paragraph className="project-text">
            With prototypes complete, validating my
            processes, I went to work developing an
            Operations Sequence, step by step instructions
            for each part and each machine. While a lot of
            work, creating an Operations Sequence greatly
            helped the whole project, giving me a step by step
            checklist of every step and every dimension, and
            limited the amount of times I’d have to go back to
            my CAD to reference something.
        </Paragraph>
      </ContentBlock>
      <div className="project-section text-only">
        <Paragraph className="project-text">
            With all the prep out of the way, it was time to go heavy on the actual machining. My main two
            processes were using the manual lathe and the manual mill. I used the lathe to turn down a lot
            of material, including all the rods slotted into the grill, alongside the “bullet”-looking nubs at the
            corner. These were turned down to size, drilled, tapped, and helicoiled on the flat side, and then
            radius cutter on the other side.
        </Paragraph>
      </div>
      <ContentBlock>
        <Image
          src={cg5}
          alt="Me applying cutting fluid while operating a manual mill"
          preview={false}
          className="project-image"
        />
        <Image
          src={cg6}
          alt="Testing the fit of a pin turned on a maunual mill"
          preview={false}
          className="project-image"
        />
      </ContentBlock>
      <div className="project-section text-only">
        <Paragraph className="project-text">
            The vast majority of my work was done on the manual mill. Everything from facing material
            down, drilling more holes, and using a variety of additional tools like chamfer end mills, corner
            rounders, and countersinks. On the mill is also where I used the custom soft-jaws I had 3D
            printed earlier, both for the “bullets” for leg attachment, and to drill the angled hole they would fit
            into.
        </Paragraph>
      </div>
      <ContentBlock>
            <Image
                src={cg7}
                alt="Me pointing to an object fixed in a manual mill"
                preview={false}
                className="project-image"
            />
            <Image
                src={cg8}
                alt="Drilling a hole on a manual mill using custom soft jaws"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                I’m quite happy with how the leg attachments came out, it achieved the dual axes offset effect
                that I was going for, and I think it is pretty clever how it all comes together. Only the “bullet” is
                threaded, so when the screw is pushed through the pin, into the bar, and then into the “bullet”, it
                ends up clamping both the pin and the bullet to the bar itself, creating a solid connection. From
                there, all the assembly is done on the fly. You slot all the rods into the holes, connect the second
                half, then slot the two end caps over the pins on either side to secure the frame. Them, you can
                screw in the angled legs! I opted for a simple brushed machine finish (especially since it is
                intended to get dirty / charred). I manually sanded all the aluminum parts from 120 grit up to 600
                grit.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
            src={cg9}
            alt="Disassembled view of the Grill Bar"
            preview={false}
            className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Overall, I’m pretty pleased with how it came out. This class was no doubt a struggle, and there
                were many trying moments where one wrong moved ruined a part and cost hours of work. But
                from those mistakes I learned and repeating parts went faster and faster as the quarter went on.
                I truly loved my time in ME 103, and want to thank my graduate coach, Jannah Kara Vira who
                helped through every step of the way, it would not have turned out like this without her help!
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
            src={cg10}
            alt="Hero shot of the final camp grill"
            preview={false}
            className="project-image project-image-only"
            />
        </div>
        <div className="project-section image-only">
            <Image
            src={cg11}
            alt="Me and my mentor, Jannah Kara Vira, posing with the final camp grill"
            preview={false}
            className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                This class truly cemented my interest in manufacturing, and I am excited to use these newfound
                skillsets for projects to come!
            </Paragraph>
        </div>
        <div className="project-pdf-links">
          <LinkItem
            href="https://drive.google.com/file/d/1TlyWt90w2z6aBfFHXuwqnSJAW_h1zAL9/view?usp=sharing"
            icon={faFilePdf}
            label="Final Presentation"
          />
      </div>
      <BackToTop/>
    </>
  );
};

export default CampGrill;
