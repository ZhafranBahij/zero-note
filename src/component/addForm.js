import react from "react";

const AddForm = (props) => {
  // First setting to do. Hero was a object so i use this.
  const [hero, setHero] = react.useState({
    name: props.initHero.name,
    skill: props.initHero.skill,
    role: props.initHero.role,
  });

  // If a form was typed
  const handleChange = (event) => {
    setHero({ ...hero, [event.target.name]: event.target.value });
  };

  // If clicked a submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addHero(hero);
    console.log(hero);
  };

  return (
    <div className="my-14">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Hero Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Just fill it and fill the sensation
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={hero.name}
                        className="mt-1 focus:ring-gray-800  focus:border-gray-800  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="skill"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Skill
                      </label>
                      <input
                        type="text"
                        name="skill"
                        id="skill"
                        autoComplete="family-name"
                        onChange={handleChange}
                        value={hero.skill}
                        className="mt-1 focus:ring-gray-800 focus:border-gray-800  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        autoComplete="role"
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800  sm:text-sm"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Spellcaster">Spellcaster</option>
                        <option value="Knight">Knight</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
