import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function PageNotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Typography variant="h3" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Go to Home
            </Button>
            <br />
            <img
                src="/PageNotFound.svg"
                alt="Page Not Found"
                width="40%"
                height="40%"
            />
        </div>
    )
}
