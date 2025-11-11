import React from 'react';
import { Typography, Image } from 'antd';
import ContentBlock from '@layouts/ContentBlock';
import TitleCard from '@layouts/TitleCard';
import LinkItem from '@components/LinkItem';
import BackToTop from '@components/BackToTop';

import '@styles/ProjectPage.css';
import {faVideo} from '@fortawesome/free-solid-svg-icons';

import dsTitle from '@assets/ds/ds0.png';
import ds1 from '@assets/ds/ds1.png';
import ds2 from '@assets/ds/ds2.png';
import ds3 from '@assets/ds/ds3.png';
import ds4 from '@assets/ds/ds4.png';
import ds5 from '@assets/ds/ds5.png';
import ds6 from '@assets/ds/ds6.png';
import ds7 from '@assets/ds/ds7.png';

const { Paragraph } = Typography;

const DifferentialSwerve: React.FC = () => {
  return (
    <>
        <TitleCard
            title="Differential Swerve"
            description="A custom dual-motor differential drivetrain designed for agile omnidirectional motion in FTC robotics"
            imageUrl={dsTitle}
        />
        <div className="project-section text-only">
            <Paragraph className="project-text">
                In my final year of FIRST Tech Challenge, I set out to design a completely new drivetrain for our
                robot: a Differential Swerve Chassis. After nearly a decade in robotics and several years refining
                mecanum drive systems, I wanted to push beyond convention and build something that
                challenged my understanding of motion, gearing, and control. Inspired by drivetrains I saw at
                the World Championship, I decided to take on the design nearly independently: modeling the full
                system, developing the mechanical components, and assisting with the programming
                integration. The goal was to create a compact, efficient, and mechanically elegant drivetrain that
                could drive and steer simultaneously using only two motors per wheel, all modeled from the
                ground up in Fusion 360.
            </Paragraph>
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                The core of the system was the differential swerve
                module, a compact mechanical assembly that
                merged steering and drive motion through the
                interaction of two involute bevel gears and a central
                pinion gear. Each bevel gear was powered by an
                independent motor. When the motors spun in the
                same direction, the wheel angle changed while
                remaining stationary; when they spun in opposite
                directions, the wheel drove forward or backward
                without rotation. By blending these inputs, the
                drivetrain achieved smooth, continuous control over
                both steering and velocity, all through the
                synchronized motion of two motors.
            </Paragraph>
            <Image
                src={ds1}
                alt="CAD of a single Differential Swerve pod"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <ContentBlock>
            <Image
                src={ds2}
                alt="CAD graphic depicting Tredgold's Approximation"
                preview={false}
                className="project-image"
            />
            <Paragraph className="project-text">
                Building this mechanism required a precise
                understanding of gear geometry and kinematics.
                Standard Fusion 360 scripts could only generate
                spur gears, so I had to model the bevel gears
                manually using Tredgold’s Approximation, a
                geometric technique that maps 2D tooth profiles
                onto a conical surface. This method captures the
                involute form needed for correct meshing
                between gears that intersect at an angle. The
                process began by defining the essential
                parameters: tooth count, pitch diameter, and
                module. From these, I constructed intersecting
                cones representing the pitch geometry of each
                gear and lofted tooth profiles along their surfaces
                to create an accurate, manufacturable bevel
                gear set.
            </Paragraph>
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Once the gears were modeled, I designed a system of GoBilda V-groove bearings to support
                the rotating pod. The bearings allowed the differential housing to pivot freely with minimal
                friction, while maintaining a rigid structure that preserved alignment between the gears and
                wheel axle. After lots of work, I had a fully modeled from scratch, a differential in Fusion 360.
                This was quite the introduction to CAD software!
            </Paragraph>
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                Power from the motors was routed through a
                compact system of gears and timing belts. The
                motors were mounted vertically and offset from
                the pods, keeping the chassis flat and stable
                while maintaining a small footprint within FTC’s
                size limits. The result was a clean and modular
                transmission layout that fit naturally with the
                differential pods.
            </Paragraph>
            <Image
                src={ds3}
                alt="CAD showing the power trasmission system from the motor to the bevel gears"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                The first version, Swerve Pod Mk.I, revealed several issues, including tight bearing fits,
                oversized prints, and a larger-than-expected footprint. The redesign, Mk.II, used smaller 3-inch
                wheels, tighter tolerances, and reduced clearances, shrinking the pod diameter from six inches
                to four. This made the system lighter, stronger, and far more compact.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={ds4}
                alt="Team gathered, assembling the Differential Swerve chassis"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Then came the programming. Driving a differential swerve requires knowing two things: the
                angle the driver wants to move toward and the current orientation of each pod. The first comes
                from joystick input, while the second is derived from motor encoder data. Because each pod
                rotates only when its two motors turn in the same direction, we tracked rotation using the
                average and difference of the two encoder values. By applying the correct gear ratios, we could
                continuously calculate the pod’s real-time angle.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={ds5}
                alt="Team gathered, assembling the Differential Swerve chassis"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <ContentBlock>
            <Paragraph className="project-text">
                To keep each pod aligned with its target angle, we
                implemented a PID controller that continuously
                adjusted motor power based on the difference between
                desired and actual orientation. We tested and tuned
                the controller in a Unity3D simulation that compared an
                idealized target wheel with a physics-based model
                affected by drag and inertia. This approach let us
                refine the control behavior virtually, minimizing
                overshoot and improving stability before running it on
                the real robot.
            </Paragraph>
            <Image
                src={ds6}
                alt="Graph showing the PID algorithm's correction"
                preview={false}
                className="project-image"
            />
        </ContentBlock>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Finally, we developed a control algorithm that combined rotation and drive commands from the
                joystick. Because both functions used the same two motors, their inputs could easily conflict. To
                handle this, we wrote a NormalizeScale function that proportionally scaled both motor outputs
                whenever their combined power exceeded the limit, keeping motion smooth and consistent
                under any steering or throttle input.
            </Paragraph>
        </div>
        <div className="project-section image-only">
            <Image
                src={ds7}
                alt="Final assembly of the chassis"
                preview={false}
                className="project-image project-image-only"
            />
        </div>
        <div className="project-section text-only">
            <Paragraph className="project-text">
                Even though we were unable to finish this project in time for our competition, it was one of the
                most rewarding projects I had been able to take on in my ten years in FIRST. It was my first time
                using CAD to do more than create a simple box, it really revealed how advanced this stuff can
                get, and started introducing me to pertinent design concepts like tolerancing, and designing with
                assumptions. It was refreshing to do something different in an environment where many teams
                build similar robots year after year, it felt like we were truly doing innovative, complex
                engineering work, all while being in high school.
            </Paragraph>
        </div>
        <div className="project-pdf-links">
          <LinkItem
            href="https://www.instagram.com/p/CkzVtn2rwFM/"
            icon={faVideo}
            label="Video of Swerve Pod in action"
          />
        </div>
        <BackToTop/>
    </>
  );
};

export default DifferentialSwerve;
