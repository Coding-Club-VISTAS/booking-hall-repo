import { Counter } from "@repo/ui/components/counter/counter";
import {
    Card,
    CardContent,
} from "@repo/ui/components/ui/card"


export default function Home() {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <Card>
                <CardContent>
                    <Counter></Counter>
                </CardContent>
            </Card>
        </div>
    );
}
