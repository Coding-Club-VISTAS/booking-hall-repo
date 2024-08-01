import { Link } from "react-router-dom";
import { Card, CardDescription, CardContent } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";

function App() {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <Card className="flex flex-col items-center w-[300px] h-[300px]">
                <CardDescription className="mt-10">Welcome! Please login or signup.</CardDescription>
                <CardContent className="w-full h-full flex flex-col gap-4 items-center justify-center">
                    <Button>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button>
                        <Link to="/signup">Signup</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
