import Card from "@/components/card";
import { ServiceData } from "@/schemas/service.schema";
import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";

interface HomeProps{
  services:ServiceData[]
}
const Home:NextPage<HomeProps>=({services}) =>{
  return (
    <main
      className={`body min-h-screen p-6`}>
        <div  className="flex-col">
          <button>Nova Irrigação</button>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
            {services.map((service)=>{
              return <Card key={service.id} service={service}/>
            })}

          </div>

      


        </div>
      
    </main>
  );
}

export const getServerSideProps:GetServerSideProps=async()=>{
  const response =await api.get<ServiceData[]>("/services/")

  return{
    props:{services:response.data}
  }
}

export default Home