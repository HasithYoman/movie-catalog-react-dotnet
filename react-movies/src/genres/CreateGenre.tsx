import axios from "axios";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./Genres.model";
import { getUrlGenres } from "../endpoints";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

function CreateGenre() {
    const history = useHistory();
    const urlGenres = getUrlGenres();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(genre: genreCreationDTO) {
        try {
            await axios.post(urlGenres, genre);
            history.push("/genres");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // Assuming error.response.data is an array of strings
                    setErrors(error.response.data);
                }
            }
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <DisplayErrors errors={errors} />
            <GenreForm
                model={{ name: "" }}
                onSubmit={async value => {
                    // Clear previous errors
                    setErrors([]);
                    await create(value);
                }}
            />
        </>
    );
}

export default CreateGenre;
