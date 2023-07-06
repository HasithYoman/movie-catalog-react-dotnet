import { Field, Formik } from "formik";
import { title } from "process";
import { boolean } from "yup";
import { genreDTO } from "../genres/Genres.model";
import Button from "../Button";

function FilterMovies() {
  const initialValues: filterMovieForm = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  };
  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Comedy" },
  ];

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="title of the movie"
                  {...formikProps.getFieldProps("title")}
                />
              </div>

              <div className="col-auto">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps("genreId")}
                >
                  <option value="0">--Choose a genre--</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-auto">
                <div className="form-auto">
                  <Field
                    className="form-check-input"
                    id="upcomingReleases"
                    name="upcomingReleases"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
                    Upcoming Releases
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <div className="form-auto">
                  <Field
                    className="form-check-input"
                    id="inTheaters"
                    name="inTheaters"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="inTheaters">
                    In Theaters
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <Button
                  className="btn btn-primary"
                  onClick={() => formikProps.submitForm()}> Filter </Button>
                  
                <Button
                  className="btn btn-danger ms-3"
                  onClick={() => formikProps.setValues(initialValues)}> Clear</Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default FilterMovies;

interface filterMovieForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
