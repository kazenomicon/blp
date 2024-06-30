import { useRouter } from "next/router";
import MemberJson from "@/master-data/members.json";
import Spinner from "@/components/Spinner";

const MemberPage = () => {
    const router = useRouter();
    const { memberId } = router.query;
    return (
        MemberJson[memberId] ? (
            <div className={`
            ${"flex h-screen w-screen justify-center text-center content-center items-center "}
            ${MemberJson[memberId].colors}
            `}>
                <div className="text-white">
                    <p className="text-4xl m-1">
                        {MemberJson[memberId].name}
                    </p>
                    <p className="text-slate-200 text-sm italic">
                        Data Comming Soon ...
                    </p>
                    <div className="m-4">
                        <Spinner />
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex h-screen w-screen bg-gradient-to-r from-blue-900 to-slate-900 justify-center text-center content-center items-center">
                <div className="text-white">
                    <h1>Member not found</h1>
                </div>
            </div>
        )

    );
};

export default MemberPage;