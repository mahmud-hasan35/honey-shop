// RegisterComponent.jsx
import Image from 'next/image';

import RegisterForm from './component/RegisterForm';


export default function RegisterComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">

          {/* Left: Image */}
          <div className="md:w-1/2 hidden md:flex bg-yellow-50 p-6 items-center justify-center">
            <div className="w-full max-w-lg">
              <Image
                src="/register.jpg"
                alt="Honey Register"
                width={700}
                height={700}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
          {/* Right: Form */}
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}
