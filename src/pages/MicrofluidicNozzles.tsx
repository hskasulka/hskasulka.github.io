import React from 'react';
import { Typography, Image } from 'antd';
import ContentBlock from '@layouts/ContentBlock';
import TitleCard from '@layouts/TitleCard';
import LinkItem from '@components/LinkItem';
import BackToTop from '@components/BackToTop';

import '@styles/ProjectPage.css';
import {faLink, faImage} from '@fortawesome/free-solid-svg-icons';

import mnTitle from '@assets/mn/mn0.jpg';
import mn1 from '@assets/mn/mn1.jpg';
import mn2 from '@assets/mn/mn2.png';
import mn3 from '@assets/mn/mn3.png';
import mn4 from '@assets/mn/mn4.png';
import mn5 from '@assets/mn/mn5.png';
import mn6 from '@assets/mn/mn6.jpg';
import mn7 from '@assets/mn/mn7.jpg';
import mn8 from '@assets/mn/mn8.png';
import mn9 from '@assets/mn/mn9.jpg';
import mn10 from '@assets/mn/mn10.png';
import mn11 from '@assets/mn/mn11.jpg';

const { Paragraph } = Typography;

const MicrofluidicNozzles: React.FC = () => {
  return (
    <>
        <TitleCard
            title="Microfluidic Nozzles"
            description="Utilizing SLA printing to create microfluidic, multimaterial nozzles to produce vasculature pathways in FDM bioprints"
            imageUrl={mnTitle}
        />
        <div className="project-section text-only">
            <Paragraph className="project-text">
                In the spring of 2025, I had the honor of joining the Larson Lab at Stanford University. The lab
                explores unique, hybrid manufacturing methods, such as multi-material printing with subvoxel
                control. More broadly, the lab aims to enable sustainable fabrication of multimaterial and
                composite systems for a wide variety of applications.
            </Paragraph>
            <Paragraph className="project-text">
                In the summer, I was able to join the lab full time, and work heavily on an exciting project on the
                cutting edge of bioprinting. I worked on building a system to reliably create vasculature
                pathways (veins, capillaries, etc) in FDM-based bioprints. This way cells in a bioprint could
                receive nutrients, dispose of waste, and culture into the 3D printed forms we specify
            </Paragraph>
        </div>
        <div className="project-section image-only" style={{paddingBottom: "5px"}}>
            <Image
                src={mn1}
                alt="Graphic showing the parts of a skeletal muscle"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <LinkItem
            href="https://www.researchgate.net/publication/369328716_Development_and_Validation_of_a_Multiparametric_Semiquantitative_Scoring_System_for_the_Histopathological_Assessment_of_Ischaemia_Severity_in_Skeletal_Muscle"
            icon={faLink}
            label="View Source"
        />
        <div className="project-section text-only">
            <Paragraph className="project-text">
                The project began with selecting and testing our materials. The end goal was to create a
                multimaterial filament with a core-shell cross section. In this filament, the outer material is a
                hydrogel, adequate for suspending living cells, and perfusing nutrients to the cells, mimicking
                the extracellular matrix in our bodies. My mentor was a PhD student working on creating
                sustainably derived, 3D printed meat, so we ended up working with food safe materials. We
                ended up choosing Gellan Gum, a tool that confectionists use. And for the core, we needed a
                sacrificial material. The material was there to maintain the shape of the vasculature while
                printing, and then be evacuated so media could flow through. We used Pluronic, a
                thermoresponsive material that changed properties based on temperature, and left no residue in
                the channels when evacuated.
            </Paragraph>
        </div>
        <ContentBlock>
            <Image
                src={mn2}
                alt="Microscope image of a grid printed from Gellan Gum"
                preview={false}
                className="project-image"
            />
            <Image
                src={mn3}
                alt="Microscope image of a grid printed from Pluronic"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Through this project I learned a lot about G-Code, and how to write my own. For out types of
                prints and testing, we can’t use traditional hobbyist slicers, so we learned how to write our
                G-Code programs from scratch, and as a sub-project, I wrote my own slicer for the Duet system
                we used to test our prints.
            </Paragraph>
            <Paragraph className="project-text">
                From there, I spent a lot of time designing microfluidic nozzles in order to do this core-shell
                printing we desired. I had played very little with SLA printing beforehand, and had done one
                print on a Formlabs machine before this summer. Afterwards, I would consider myself quite
                knowledgeable when it comes to SLA printing, and design considerations when it comes to
                designing microfluidics.
            </Paragraph>
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                It all started in CAD where I played with more
                advance features such as sweeps and lofts with
                guiding lines, creating these organic pathways for
                fluids to flow through. It took many iterations
                going back and forth from designing, printing,
                post-processing, and flowing fluids through the
                channels. One major issue I encountered was
                getting even extrusion across the whole cross
                section of the nozzle. In order to get the defined
                core, material had to cut through the shell layer
                and define a path for that core fluid to pass
                through. When this happened, the fluid now had
                an obstacle to flow around and often did not flow
                at the same rate as the opposite side would.
            </Paragraph>
            <Image
                src={mn4}
                alt="Three iterations of the multi-material, microfluidic nozzle"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                After experimenting with different designs, I ended up with this novel “split” channel design.
                Instead of the shell having to flow around the core channel, the shell is split at the inlet into two
                channels which flow around the central core and meet on opposite sides of the core channel.
                Then then simply loft together to stitch the circular cross section back together.
            </Paragraph>
        </div>
        <ContentBlock>
            <Image
                src={mn5}
                alt="CAD model of the final microfluidic nozzle"
                preview={false}
                className="project-image "
            />
            <Image
                src={mn6}
                alt="Nozzle and multimaterial filament with UV light shining on it"
                preview={false}
                className="project-image "
            />
        </ContentBlock>
        <ContentBlock>
            <Image
                src={mn7}
                alt="Nozzle with tiny fluid stream coming out of i"
                preview={false}
                className="project-image"
            />
            <Paragraph className="project-text">
                We also experimented a lot with the post processing.
                These channel pathways got as small as 0.3mm wide, and
                we had many issues with the channels simply fusing and
                closing up due to trapped resin curing. A lot of these issues
                I was able to fix in the design, keeping channels wide right
                up until the nozzle, printing channels at slanted angles to
                prevent large unsupported horizontal channels, and
                experimenting with pressurizing and back flushing channels
                to remove trapped resin that wouldn’t come out in a
                standard wash.
            </Paragraph>
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                After lots of trial and error, I finally fine-tuned the parameters of my multi-material to a point I
                was happy with. I did some test prints with the Gellan Gum and Pluronic materials we had
                elected to use earlier, and added fluorescent particles to see the defined channel. And the
                microscope images speak for themselves.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={mn8}
                alt="Microscope image showing neon green core in the multimaterial filament"
                preview={false}
                className="project-image project-image-only"
            />     
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                The last part of the project was to
                design a “Perfusion Platform”, a system
                to hook up a print made with my
                nozzles to syringes located at an inlet
                and an outlet, and then pump the now
                liquid pluronic out of the system. I was
                only able to begin working on this part
                late in the summer, and our lab still did
                not have the high-precision equipment
                we needed to build this effectively, I was
                able to prototype the process by hand,
                with the help of some 3D printed
                guides.
            </Paragraph>
            <Image
                src={mn9}
                alt="Perfusion platform with syringed inserted"
                preview={false}
                className="project-image"
            />  
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                When the print was complete, we immediately applied a crosslinking ionic solution to the gellan
                gum, which caused it to harden and stick to itself better. We then put the print on ice, which
                causes the Pluronic, which is solid at room temperature, to turn into a liquid. Lastly, we put the
                slide on my simple 3D printed guide, slotted in the syringes, and tested methods of evacuating
                the pluronic. The setup was difficult and many times I broke the filament while trying to insert the
                syringes, and the couple times I was able to successfully insert them, there had been
                microscopic leaks somewhere else, revealed when we pumped dyed water through the system.
                It proved that this idea to perfuse the channel was definitely doable, however it just needed
                some fine tuning, and equipment with more accuracy than the human hand.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={mn10}
                alt="Before and after of the perfusion process"
                preview={false}
                className="project-image project-image-only"
            />     
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Overall, I really enjoyed my time in the Larson Lab over the summer, and cemented my love of
                Additive Manufacturing, and I’m excited to take some of the lessons I learned in this lab and
                apply them in my personal projects, or in other fields. During the school year, I plan to continue
                with the lab and further develop this exciting project.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={mn11}
                alt="Me posing with my research poser at the research symposium"
                preview={false}
                className="project-image project-image-only"
            />     
        </div>
        <div className="project-pdf-links">
          <LinkItem
            href="https://drive.google.com/file/d/1AEr7jIJGRqpFyFk-GhhRwMsGKLi_gFlt/view?usp=sharing"
            icon={faImage}
            label="Research Poster"
          />
      </div>
        <BackToTop/>
    </>
  );
};

export default MicrofluidicNozzles;
