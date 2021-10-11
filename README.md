# Zero-Note

Well, i create this app with react and tailwind. If you want to see, [check this](https://zhafranbahij.github.io/zero-note/).

## Some Technical that i need in the future

It's just a documentary to do something that i take long time to finished this problem. So, maybe i just create this for my future self if i have some trouble in later project.

### Insert tailwindcss/forms

create global.d.ts in the rood of directory and add in this declare module "@tailwindcss/forms";
I remove a purge in package.json
The rest i just took it from [tutorial](https://www.npmjs.com/package/@tailwindcss/forms)

### Use a state from hook

> setHero({ ...hero, [event.target.name]: event.target.value });

It's just a example. If i create a object called "HERO" and the location of this set is in handleChange, i need to do this.
"...hero" like a spread object. Hmm, maybe it set a state before .

### Edit and Update

In dashboard.js on editHeroes function

> const editHeroes = (currentname, currentskill, currentrole) => {
> initHero.name = currentname;
> initHero.skill = currentskill;
> initHero.role = currentrole;
> setHeroes(heroes.filter((hero) => hero.name !== currentname));
> };

In addForm.js

> react.useEffect(() => {
> setHero({
> name: props.initHero.name,
> skill: props.initHero.skill,
> role: props.initHero.role,
> });
> }, [props]);
