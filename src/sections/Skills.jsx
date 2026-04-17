import React from 'react';
import { skillsData } from '../data/skills';
import { HiOutlineServer, HiOutlineDesktopComputer, HiOutlineDatabase, HiOutlineChip, HiOutlineLightBulb } from 'react-icons/hi';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const categories = [
    { name: 'Backend', items: skillsData.backend, icon: HiOutlineServer },
    { name: 'Frontend', items: skillsData.frontend, icon: HiOutlineDesktopComputer },
    { name: 'Database & ORM', items: skillsData.database, icon: HiOutlineDatabase },
    { name: 'Ai/Ml', items: skillsData.aiml, icon: HiOutlineLightBulb },
    { name: 'DevOps & Tools', items: skillsData.tools, icon: HiOutlineChip },
  ];

  return (
    <section id="skills" className="relative py-32 bg-dark-950/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionTitle subtitle="Capabilities" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
          {categories.map((cat, i) => (
            <SkillCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
