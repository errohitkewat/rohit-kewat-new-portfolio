// ─────────────────────────────────────────────────────────────
// EDIT THIS ONE FILE to change everything on the site.
// Every value below is a placeholder — replace it with your real details.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: 'Rohit Kewat',
  initials: 'RK',
  handle: '@rohitkewat',
  role: 'Software Engineer',
  image: '/profile.jpg', // put your photo at public/profile.jpg
  openToWork: true,
  statusText: 'Open to opportunities',
  bio: 'Software engineer who builds fast, reliable and clean web products.',
  about: [
    'Write 2–3 sentences about who you are and what kind of problems you enjoy solving.',
    'Mention what you are learning now, what you have shipped, and what you want to do next.',
  ],
  facts: [
    { label: 'Location', value: 'India' },
    { label: 'Experience', value: 'Add years' },
    { label: 'Focus', value: 'Full-stack' },
    { label: 'Education', value: 'Add degree' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'you@example.com', href: 'mailto:you@example.com' },
  ],
  email: 'you@example.com',
  projects: [
    { id: 1, name: 'Project One', type: 'Web App', tags: ['React', 'Redux', 'Tailwind'], desc: 'One or two lines on what it does and why it matters.', stack: 'React · Redux Toolkit', link: '#' },
    { id: 2, name: 'Project Two', type: 'API', tags: ['Node.js', 'MongoDB'], desc: 'Describe the problem you solved and the result you got.', stack: 'Node.js · MongoDB', link: '#' },
    { id: 3, name: 'Project Three', type: 'Web App', tags: ['JavaScript', 'HTML', 'CSS'], desc: 'Mention what you learned or the numbers you improved.', stack: 'JavaScript · CSS', link: '#' },
    { id: 4, name: 'Project Four', type: 'Tool', tags: ['Python'], desc: 'A small tool or experiment worth showing.', stack: 'Python', link: '#' },
  ],
  experience: [
    { when: 'Year – Present', title: 'Your latest role', place: 'Company or institute', points: ['What you built or owned.', 'A result with a number if you have one.'] },
    { when: 'Year – Year', title: 'Previous role or internship', place: 'Company', points: ['What you worked on.', 'What you learned.'] },
    { when: 'Year – Year', title: 'Education', place: 'College or university', points: ['Degree, branch and highlights.'] },
  ],
  skillGroups: [
    { title: 'Languages', items: [['JavaScript', 90], ['HTML & CSS', 92], ['Python', 70], ['SQL', 70]] },
    { title: 'Frameworks & tools', items: [['React', 88], ['Redux Toolkit', 82], ['Tailwind CSS', 90], ['Node.js', 72]] },
  ],
  tools: ['React Router', 'Vite', 'Git', 'GitHub', 'REST APIs', 'MongoDB', 'Figma', 'VS Code'],
}
