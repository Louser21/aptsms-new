import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function EndowmentLectures() {
  return (
    <div className="space-y-2 p-3">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-700"
      >
        Endowment Lectures
      </motion.h1>

      <Card className="border-green-800 border-3 bg-green-50">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-base font-semibold">The following Endowment Lectures are arranged in the annual congress :</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prof. N. V.Subramanyam Endowment Lecture in Algebra - Sponsored by Prof.N. V.Subramanyam Shashthyabdipurti Felicitation Committee.</li>
            <li>Prof. Kesiraju Satyanarayana memorial Lecture in Geometry - Sponsored by Prof. N.Ch.Pattabhi Ramacharyulu.</li>
            <li>Endowment Lecture in Number Theory - Sponsored by Prof. K.P.R.Sastry.</li>
            <li>Sri. D. Venkatachari memorial Lecture in Applied Mathematics - Sponsored by D.V. Krishna and his brothers.</li>
            <li>Prof. S. N. N. Pandit Endowment Lecture in Applied Statistics - Sponsored by Prof. V.V. Haragopal.</li>
            <li>Prof. R. Vaidyanatha Swamy memorial Lecture in Pure Mathematics - Sponsored by Prof. V.V.Subramanya Sastry.</li>
            <li>Smt & Sri G.P. Sharma memorial Lecture on Theoretical Computer Sciences - Sponsored by Dr. G. Lalitha.</li>
            <li>Prof. M.L. Narayana Rao memorial Lecture in Algebra and its Applications to Geometries - Sponsored by his students.</li>
            <li>Prof. A. Kanduri Lakshmi Narasimha Swamy Endowment Lecture in Algebra and Applications - Sponsored by Prof. K.L.N. Swamy Felicition Committee.</li>
            <li>Prof. A. Radha Krishna Endowment Lecture in Algebra - Sponsored by Prof. T. Srinivas and Dr. K. Yugandhar.</li>
            <li>Lecture in honor of Prof. N. Ch. Pattabhi Ramacharyulu - Instituted by APSMS Life Members, Admirers, and Research Associates.</li>
            <li>Prof. Bhavanari Satyanarayana Endowment Lecture in Algebra - Sponsored by his research scholars and students.</li>
            <li>Prof. P.V. Arunachalam Endowment Lecture in Mathematics/Applied Mathematics - Sponsored by staff of Dept. of Mathematics, S.V. University, Tirupati.</li>
            <li>Prof. Kuncham Syam Prasad and Prof. Bhavanari Satyanarayana Endowment Lecture on Gamma-Near-Rings - Sponsored by Mr. Mallikarjun Bhavanari and Mrs. Jaya Lakshmi Bhavanari.</li>
            <li>Prof. B. Maheswari Endowment Lecture in Graph Theory - Sponsored by her research scholars, Sri Padmavati Mahila Visvavidyalayam, Tirupati.</li>
            <li>Prof. T. Srinivas Endowment Lecture on Near-Rings - Sponsored by Dr. T. Nagaiah and Dr. P. Narasimha Swamy.</li>
            <li>Prof. Sreedharamalle Sreenadh Endowment Lecture in Applied Mathematics - Sponsored by Dr. A.N.S. Srinivas and Dr. R. Hemadri Reddy.</li>
            <li>Prof. Davuluri Ramakotaiah, Prof. Yenumula Venkateswara Reddy and Prof. Bhavanari Satyanarayana Endowment Lecture on Near Rings - Sponsored by Mr. Mallikarjun Bhavanari and Mrs. Jayalakshmi Bhavanari.</li>
            <li>Prof. G.C. Rao Endowment Lecture in Algebra - Sponsored by Dr. G. Nanaji Rao.</li>
            <li>Prof. Bhavanari Satyanarayana and Dr. Sriramula Eswaraiah Setty Endowment Lecture in Mathematics - Sponsored by Mrs. Jaya Lakshmi Bhavanari and Mrs. Vijaya Lakshmi Sriramula.</li>
            <li>Prof. Bhavanari Satyanarayana, Prof. Sreedharamalle Sreenadh and Prof. Thota Srinivas Endowment Lecture in Mathematics - Sponsored by Mrs. Jaya Lakshmi Bhavanari, Mrs. Sitamahalakshmi Sreedharamalle and Dr. K. Vijay Kumar.</li>
            <li>Prof. K. Suvarna Endowment Lecture in Algebra and its Applications - Sponsored by Dr. C. Jaya Subba Reddy, S.V. University, Tirupati.</li>
            <li>Prof. Bhavanari Satyanarayana, Prof. Kuncham Syam Prasad and Dr. Kedukodi Babushri Srinivas Endowment Lecture on Near Rings and Related Algebraic Structures - Sponsored by Mrs. Jaya Lakshmi Bhavanari, Mrs. Anitha Bodla, and Mrs. Vrishali Narayana Bhat.</li>
            <li>Prof. Vijaykumar Varma Endowment Lecture in Vedic/Applicable Mathematics - Sponsored by Dr. K. Nagamanemma, Prof. Anand Kumar, Dr. V. Rajesh, Prof. K. Balamurugan, and M. Chengal Raju.</li>
            <li>Prof. U.M. Swamy Endowment Lecture in Algebra - Sponsored by Prof. Ch. Santhi Sundar Raj and his Research Students.</li>
            <li>Prof. Nyalakonda Gopal Reddy Endowment Lecture in Functional Analysis and Operator Theory - Sponsored by Prof. B. Surender Reddy (OU), Prof. B. Krishna Reddy (OU), Dr. G. Upender Reddy (MGU), and Dr. D. Sudheer Reddy (Adrin, Dept. of Space).</li>
          </ul>
        </CardContent>
      </Card>

        

      <Card className="border-green-800 border-3 bg-green-50">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Note</h2>
          <p>
            Lecture in honor of Prof. N. Ch. Pattabhi Ramacharyulu, one of the Founding Members of APSMS, instituted by Life Members of APSMS, admirers, and research associates. This lecture will be arranged every year on the first day of the Annual Congress after the Presidential Address.
          </p>
        </CardContent>
      </Card>

      <Card className="border-green-800 border-3 bg-green-50">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Best Paper Awards</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prof. Meenakshi Sundaram Memorial Best Paper Award in Applied Mathematics - Instituted by Dr. S. Ramu.</li>
            <li>Prof. U. M. Swamy Best Paper Award in Pure Mathematics - Instituted by his students.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-green-800 border-3 bg-green-50">
        <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-semibold">ENDOWMENT LECTURES CONDUCTED IN XXVII CONGRESS OF APTSMS DURING 8th-10th Dec.2018 AT MARIES STELLA COLLEGE,VIJAYAWADA.</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li>Prof. R. Vaidyanatha Swamy memorial Lecture in Pure Mathematics sponsored by Prof.V.V.Subramanya Sastry by Prof. Bhavanari Satyanaryana, Dept.of Maths, ANU,Guntur Cell no.779373468</li>
            <li>Smt& Sri G.P.Sharma memorial Lecture on Theoretical Computer Sciences sponsored by Dr.G.Lalitha by Prof.Trimurthy ,Dept.of Computr science,ANU,Guntur9440942418</li>
            <li>Prof.M.L.Narayana Rao memorial Lecture in Algebra and its Applications to Geometries sponsored by his students, by Prof.K.Satyanaryana, (Rtd) OU.,Hyderabad ,cell no.9490156677</li>
            <li>Prof A.Kanduri Lakshmi Narasimha Swamy Endowment Lecture in Algebra and Applications sponsored by Prof.K.L.N.Swamy Felicition Committee, by Prof.Ch.Santisunder Raj,AU,Visakhapatnam, 9440697270</li>
            <li>Prof A. Radha Krishna Endowment Lecture in Algebra sponsored by his students Prof.T.Srinivas and Dr.K.Yugandhar, Dr. P.N.Swamy,GITAM ,Hyderabad,cell no.9948525133</li>
            <li>Lecture in honor of Prof. N .Ch. Pattabhi Ramacharyulu, one of the Founding Members of APSMS instituted by Some Life Members of APSMS, Admirers and Research Associates of Prof. N. Ch. Pattabhi Ramacharyulu, by Prof.D.Srinivasa charya, NIT,Warangal,cell no.9849187249</li>
            <li>Prof. Davuluri Ramakotaiah, Prof. Yenumula Venkateswara Reddy and Prof. Bhavanari Satyanarayana Endowment lecture on Near rings sponsored by Mr. Mallikarjun Bhavanari and Mrs.Jayalakshmi Bhavanari by T.V.Pradeep Kumar,ANU Emg. College,Guntur 9290620490</li>
            <li>Prof.G.C.Rao Endowment lecture in Algebra Sponsored by his student Dr.G. Nanaji Rao, by Dr.Nanaji Rao, AU,Visakhapatnam, cell no. 9440367745</li>
            <li>Prof. Bhavanari Satyanarayana and Dr.Sriramula Eswaraiah setty Endowment Lecture in Mathematics Sponsored by Mrs.Jaya Lakshmi Bhavanari and Mrs.Vijaya Lakshmi Sriramula, by Prof.K.Chandan , ANU Guntur 9848475011</li>
            <li>Prof. Bhavanari Satyanarayana, Prof.Sreedharamalle Sreenadh and Prof.Thota Srinivas Endowment lecture in Mathematics sponsored by Mrs. Jaya Lakshmi Bhavanari, Mrs. Sitamahalakshmi Sreedharamalle and Dr.K.Vijay Kumar by MOHIDDIN SHAW SHAIK, Narsaraopet Eng. College 9247203211</li>

          </ul>
        </CardContent>
      </Card>




      <Card className="border-green-800 border-3 bg-green-50">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">ENDOWMENT LECTURES CONDUCTED IN XXXI ANNUAL CONGRESS OF APTSMS DURING 9th-11th Dec.2022 AT NATIONAL SANSKRIT UNIVERSITY - TIRUPATI.</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prof. N. V.Subramanyam Endowment Lecture in Algebra - Sponsored by Prof.N. V.Subramanyam Shashthyabdipurti Felicitation Committee.</li>
            <li>Prof. Kesiraju Satyanarayana memorial Lecture in Geometry - Sponsored by Prof. N.Ch.Pattabhi Ramacharyulu.</li>
            <li>Endowment Lecture in Number Theory - Sponsored by Prof. K.P.R.Sastry.</li>
            <li>Sri. D. Venkatachari memorial Lecture in Applied Mathematics - Sponsored by D.V. Krishna and his brothers.</li>
            <li>Prof. S. N. N. Pandit Endowment Lecture in Applied Statistics - Sponsored by Prof. V.V. Haragopal.</li>
            <li>Prof. R. Vaidyanatha Swamy memorial Lecture in Pure Mathematics - Sponsored by Prof. V.V.Subramanya Sastry.</li>
            <li>Smt & Sri G.P. Sharma memorial Lecture on Theoretical Computer Sciences - Sponsored by Dr. G. Lalitha.</li>
            <li>Prof. M.L. Narayana Rao memorial Lecture in Algebra and its Applications to Geometries - Sponsored by his students.</li>
            <li>Prof. A. Kanduri Lakshmi Narasimha Swamy Endowment Lecture in Algebra and Applications - Sponsored by Prof. K.L.N. Swamy Felicition Committee.</li>
            <li>Prof. A. Radha Krishna Endowment Lecture in Algebra - Sponsored by Prof. T. Srinivas and Dr. K. Yugandhar.</li>
            <li>Lecture in honor of Prof. N. Ch. Pattabhi Ramacharyulu - Instituted by APSMS Life Members, Admirers, and Research Associates.</li>
            <li>Prof. Bhavanari Satyanarayana Endowment Lecture in Algebra - Sponsored by his research scholars and students.</li>
            <li>Prof. P.V. Arunachalam Endowment Lecture in Mathematics/Applied Mathematics - Sponsored by staff of Dept. of Mathematics, S.V. University, Tirupati.</li>
            <li>Prof. Kuncham Syam Prasad and Prof. Bhavanari Satyanarayana Endowment Lecture on Gamma-Near-Rings - Sponsored by Mr. Mallikarjun Bhavanari and Mrs. Jaya Lakshmi Bhavanari.</li>
            <li>Prof. B. Maheswari Endowment Lecture in Graph Theory - Sponsored by her research scholars, Sri Padmavati Mahila Visvavidyalayam, Tirupati.</li>
            <li>Prof. T. Srinivas Endowment Lecture on Near-Rings - Sponsored by Dr. T. Nagaiah and Dr. P. Narasimha Swamy.</li>
            <li>Prof. Sreedharamalle Sreenadh Endowment Lecture in Applied Mathematics - Sponsored by Dr. A.N.S. Srinivas and Dr. R. Hemadri Reddy.</li>
            <li>Prof. Davuluri Ramakotaiah, Prof. Yenumula Venkateswara Reddy and Prof. Bhavanari Satyanarayana Endowment Lecture on Near Rings - Sponsored by Mr. Mallikarjun Bhavanari and Mrs. Jayalakshmi Bhavanari.</li>
            <li>Prof. G.C. Rao Endowment Lecture in Algebra - Sponsored by Dr. G. Nanaji Rao.</li>
            <li>Prof. Bhavanari Satyanarayana and Dr. Sriramula Eswaraiah Setty Endowment Lecture in Mathematics - Sponsored by Mrs. Jaya Lakshmi Bhavanari and Mrs. Vijaya Lakshmi Sriramula.</li>
            <li>Prof. Bhavanari Satyanarayana, Prof. Sreedharamalle Sreenadh and Prof. Thota Srinivas Endowment Lecture in Mathematics - Sponsored by Mrs. Jaya Lakshmi Bhavanari, Mrs. Sitamahalakshmi Sreedharamalle and Dr. K. Vijay Kumar.</li>
            <li>Prof. K. Suvarna Endowment Lecture in Algebra and its Applications - Sponsored by Dr. C. Jaya Subba Reddy, S.V. University, Tirupati.</li>
            <li>Prof. Bhavanari Satyanarayana, Prof. Kuncham Syam Prasad and Dr. Kedukodi Babushri Srinivas Endowment Lecture on Near Rings and Related Algebraic Structures - Sponsored by Mrs. Jaya Lakshmi Bhavanari, Mrs. Anitha Bodla, and Mrs. Vrishali Narayana Bhat.</li>
            <li>Prof. Vijaykumar Varma Endowment Lecture in Vedic/Applicable Mathematics - Sponsored by Dr. K. Nagamanemma, Prof. Anand Kumar, Dr. V. Rajesh, Prof. K. Balamurugan, and M. Chengal Raju.</li>
            <li>Prof. U.M. Swamy Endowment Lecture in Algebra - Sponsored by Prof. Ch. Santhi Sundar Raj and his Research Students.</li>
            <li>Prof. Nyalakonda Gopal Reddy Endowment Lecture in Functional Analysis and Operator Theory - Sponsored by Prof. B. Surender Reddy (OU), Prof. B. Krishna Reddy (OU), Dr. G. Upender Reddy (MGU), and Dr. D. Sudheer Reddy (Adrin, Dept. of Space).</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
