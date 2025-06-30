import { useEffect, useState } from 'react';
import CoursesCarousel from '../components/minimal/CoursesCarousel'
// import { coursesDataLocal } from '../data/CoursesData'

// supabase staff

import { createClient } from '@supabase/supabase-js';
import Navbar from '../components/Complex/Navbar';

const supabaseUrl = 'https://wslwutfluuuzgeclbzmn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzbHd1dGZsdXV1emdlY2xiem1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjA4MjMsImV4cCI6MjA2Njc5NjgyM30.O_7-uc0HKGsqMgxJCw2b47PtJFVoQuUfpXqHzbr6UJ4';
const supabase = createClient(supabaseUrl, supabaseKey);

function Courses() {

    const [coursesData, setCoursesData] = useState({})

    async function fetchCoursesData() {
        const { data, error } = await supabase
            .from('course-cards')
            .select()
        if (error) {
            console.error("Failed to load the data: " + error.message)
            return
        }
        console.log(data)
        setCoursesData(data);
    }

    useEffect(() => {
        fetchCoursesData();
    }, [])

    return (
        <>

            <CoursesCarousel coursesData={coursesData} />
        </>
    )
}

export default Courses