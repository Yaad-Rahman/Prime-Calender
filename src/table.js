import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';



function dhakaTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const dhaka = [
    dhakaTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.০৯', '৬.২৫'),
    dhakaTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০৮', '৬.২৫'),
    dhakaTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৭', '৬.২৬'),
    dhakaTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৬', '৬.২৬'),
    dhakaTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৫', '৬.২৬'),
    dhakaTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০৪', '৬.২৭'),
    dhakaTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৪', '৬.২৭'),
    dhakaTimes('৮', '০২ মে', 'শনিবার', '৪.০৩', '৬.২৮'),
    dhakaTimes('৯', '০৩ মে', 'রবিবার', '৪.০২', '৬.২৮'),
    dhakaTimes('১০', '০৪ মে', 'সোমবার', '৪.০১', '৬.২৯'),
    dhakaTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০০', '৬.২৯'),
    dhakaTimes('১২', '০৬ মে', 'বুধবার', '৩.৫৯', '৬.৩০'),
    dhakaTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৩.৫৯', '৬.৩০'),
    dhakaTimes('১৪', '০৮ মে', 'শুক্রবার', '৩.৫৯', '৬.৩০'),
    dhakaTimes('১৫', '০৯ মে', 'শনিবার', '৩.৫৭', '৬.৩১'),
    dhakaTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৬', '৬.৩২'),
    dhakaTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৫', '৬.৩২'),
    dhakaTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫৫', '৬.৩৩'),
    dhakaTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫৪', '৬.৩৩'),
    dhakaTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৩', '৬.৩৪'),
    dhakaTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫৩', '৬.২৫'),
    dhakaTimes('২২', '১৬ মে', 'শনিবার', '৩.৫২', '৬.২৫'),
    dhakaTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫২', '৬.২৫'),
    dhakaTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫১', '৬.২৫'),
    dhakaTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৫০', '৬.২৫'),
    dhakaTimes('২৬', '২০ মে', 'বুধবার', '৩.৫০', '৬.২৫'),
    dhakaTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৪৯', '৬.২৫'),
    dhakaTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৪৯', '৬.২৫'),
    dhakaTimes('২৯', '২৩ মে', 'শনিবার', '৩.৪৮', '৬.২৫'),
    dhakaTimes('৩০', '২৪ মে', 'রবিবার', '৩.৪৮', '৬.২৫'),
]

function barisalTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const barisal = [
    barisalTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.১১', '৬.২৪'),
    barisalTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.১০', '৬.২৪'),
    barisalTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৯', '৬.২৪'),
    barisalTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৯', '৬.২৫'),
    barisalTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৮', '৬.২৫'),
    barisalTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০৭', '৬.২৬'),
    barisalTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৬', '৬.২৬'),
    barisalTimes('৮', '০২ মে', 'শনিবার', '৪.০৫', '৬.২৭'),
    barisalTimes('৯', '০৩ মে', 'রবিবার', '৪.০৪', '৬.২৭'),
    barisalTimes('১০', '০৪ মে', 'সোমবার', '৪.০৩', '৬.২৭'),
    barisalTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০৩', '৬.২৮'),
    barisalTimes('১২', '০৬ মে', 'বুধবার', '৪.০২', '৬.২৮'),
    barisalTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৪.০১', '৬.২৯'),
    barisalTimes('১৪', '০৮ মে', 'শুক্রবার', '৪.০১', '৬.২৯'),
    barisalTimes('১৫', '০৯ মে', 'শনিবার', '৪.০০', '৬.৩০'),
    barisalTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৯', '৬.৩০'),
    barisalTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৮', '৬.৩১'),
    barisalTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫৭', '৬.৩১'),
    barisalTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫৭', '৬.৩২'),
    barisalTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৬', '৬.৩২'),
    barisalTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫৬', '৬.৩২'),
    barisalTimes('২২', '১৬ মে', 'শনিবার', '৩.৫৫', '৬.৩৩'),
    barisalTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫৪', '৬.৩৩'),
    barisalTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫৪', '৬.৩৪'),
    barisalTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৫৩', '৬.৩৪'),
    barisalTimes('২৬', '২০ মে', 'বুধবার', '৩.৫৩', '৬.৩৫'),
    barisalTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৫২', '৬.৩৫'),
    barisalTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৫২', '৬.৩৬'),
    barisalTimes('২৯', '২৩ মে', 'শনিবার', '৩.৫১', '৬.৩৬'),
    barisalTimes('৩০', '২৪ মে', 'রবিবার', '৩.৫১', '৬.৩৭'),
]


function rangpurTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const rangpur = [
    rangpurTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.১০', '৬.৩২'),
    rangpurTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০৯', '৬.৩২'),
    rangpurTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৮', '৬.৩৩'),
    rangpurTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৭', '৬.৩৩'),
    rangpurTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৬', '৬.৩৪'),
    rangpurTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০৫', '৬.৩৪'),
    rangpurTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৪', '৬.৩৫'),
    rangpurTimes('৮', '০২ মে', 'শনিবার', '৪.০৩', '৬.৩৫'),
    rangpurTimes('৯', '০৩ মে', 'রবিবার', '৪.০২', '৬.৩৬'),
    rangpurTimes('১০', '০৪ মে', 'সোমবার', '৪.০১', '৬.৩৬'),
    rangpurTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০০', '৬.৩৭'),
    rangpurTimes('১২', '০৬ মে', 'বুধবার', '৩.৫৯', '৬.৩৭'),
    rangpurTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৩.৫৮', '৬.৩৮'),
    rangpurTimes('১৪', '০৮ মে', 'শুক্রবার', '৩.৫৮', '৬.৩৮'),
    rangpurTimes('১৫', '০৯ মে', 'শনিবার', '৩.৫৬', '৬.৩৯'),
    rangpurTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৬', '৬.৪০'),
    rangpurTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৫', '৬.৪০'),
    rangpurTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫৪', '৬.৪১'),
    rangpurTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫৩', '৬.৪১'),
    rangpurTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৩', '৬.৪২'),
    rangpurTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫২', '৬.৪২'),
    rangpurTimes('২২', '১৬ মে', 'শনিবার', '৩.৫১', '৬.৪৩'),
    rangpurTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫০', '৬.৪৩'),
    rangpurTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫০', '৬.৪৪'),
    rangpurTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৪৯', '৬.৪৪'),
    rangpurTimes('২৬', '২০ মে', 'বুধবার', '৩.৪৯', '৬.৪৫'),
    rangpurTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৪৮', '৬.৪৫'),
    rangpurTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৪৭', '৬.৪৬'),
    rangpurTimes('২৯', '২৩ মে', 'শনিবার', '৩.৪৭', '৬.৪৬'),
    rangpurTimes('৩০', '২৪ মে', 'রবিবার', '৩.৪৬', '৬.৪৭'),
]


function rajshahiTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const rajshahi = [
    rajshahiTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.১৫', '৬.৩৩'),
    rajshahiTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.১৪', '৬.৩৩'),
    rajshahiTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.১৩', '৬.৩৪'),
    rajshahiTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.১২', '৬.৩৪'),
    rajshahiTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.১১', '৬.৩৫'),
    rajshahiTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.১০', '৬.৩৫'),
    rajshahiTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৯', '৬.৩৬'),
    rajshahiTimes('৮', '০২ মে', 'শনিবার', '৪.০৮', '৬.৩৬'),
    rajshahiTimes('৯', '০৩ মে', 'রবিবার', '৪.০৮', '৬.৩৬'),
    rajshahiTimes('১০', '০৪ মে', 'সোমবার', '৪.০৭', '৬.৩৭'),
    rajshahiTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০৬', '৬.৩৭'),
    rajshahiTimes('১২', '০৬ মে', 'বুধবার', '৪.০৫', '৬.৩৮'),
    rajshahiTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৪.০৪', '৬.৩৮'),
    rajshahiTimes('১৪', '০৮ মে', 'শুক্রবার', '৪.০৪', '৬.৩৮'),
    rajshahiTimes('১৫', '০৯ মে', 'শনিবার', '৪.০৩', '৬.৩৯'),
    rajshahiTimes('১৬', '১০ মে', 'রবিবার', '৪.০২', '৬.৪০'),
    rajshahiTimes('১৭', '১১ মে', 'সোমবার', '৪.০১', '৬.৪০'),
    rajshahiTimes('১৮', '১২ মে', 'মঙ্গলবার', '৪.০০', '৬.৪১'),
    rajshahiTimes('১৯', '১৩ মে', 'বুধবার', '৪.০০', '৬.৪১'),
    rajshahiTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৯', '৬.৪২'),
    rajshahiTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫৮', '৬.৪২'),
    rajshahiTimes('২২', '১৬ মে', 'শনিবার', '৩.৫৮', '৬.৪৩'),
    rajshahiTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫৭', '৬.৪৩'),
    rajshahiTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫৬', '৬.৪৩'),
    rajshahiTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৫৬', '৬.৪৪'),
    rajshahiTimes('২৬', '২০ মে', 'বুধবার', '৩.৫৫', '৬.৪৪'),
    rajshahiTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৫৫', '৬.৪৫'),
    rajshahiTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৫৪', '৬.৪৫'),
    rajshahiTimes('২৯', '২৩ মে', 'শনিবার', '৩.৫৪', '৬.৪৬'),
    rajshahiTimes('৩০', '২৪ মে', 'রবিবার', '৩.৫৩', '৬.৪৭'),
]


function sylhetTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const sylhet = [
    sylhetTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.০১', '৬.২০'),
    sylhetTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০০', '৬.২১'),
    sylhetTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৩.৫৯', '৬.২১'),
    sylhetTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৩.৫৮', '৬.২২'),
    sylhetTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৩.৫৭', '৬.২২'),
    sylhetTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৩.৫৬', '৬.২৩'),
    sylhetTimes('৭', '০১ মে', 'শুক্রবার', '৩.৫৫', '৬.২৩'),
    sylhetTimes('৮', '০২ মে', 'শনিবার', '৩.৫৪', '৬.২৪'),
    sylhetTimes('৯', '০৩ মে', 'রবিবার', '৩.৫৩', '৬.২৪'),
    sylhetTimes('১০', '০৪ মে', 'সোমবার', '৩.৫২', '৬.২৫'),
    sylhetTimes('১১', '০৫ মে', 'মঙ্গলবার', '৩.৫২', '৬.২৫'),
    sylhetTimes('১২', '০৬ মে', 'বুধবার', '৩.৫১', '৬.২৬'),
    sylhetTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৩.৫০', '৬.২৬'),
    sylhetTimes('১৪', '০৮ মে', 'শুক্রবার', '৩.৫০', '৬.২৬'),
    sylhetTimes('১৫', '০৯ মে', 'শনিবার', '৩.৪৮', '৬.২৭'),
    sylhetTimes('১৬', '১০ মে', 'রবিবার', '৩.৪৭', '৬.২৮'),
    sylhetTimes('১৭', '১১ মে', 'সোমবার', '৩.৪৭', '৬.২৮'),
    sylhetTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৪৬', '৬.২৯'),
    sylhetTimes('১৯', '১৩ মে', 'বুধবার', '৩.৪৫', '৬.২৯'),
    sylhetTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৪৪', '৬.৩০'),
    sylhetTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৪৪', '৬.৩০'),
    sylhetTimes('২২', '১৬ মে', 'শনিবার', '৩.৪৩', '৬.৩১'),
    sylhetTimes('২৩', '১৭ মে', 'রবিবার', '৩.৪২', '৬.৩১'),
    sylhetTimes('২৪', '১৮ মে', 'সোমবার', '৩.৪২', '৬.৩২'),
    sylhetTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৪১', '৬.৩২'),
    sylhetTimes('২৬', '২০ মে', 'বুধবার', '৩.৪১', '৬.৩৩'),
    sylhetTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৪০', '৬.৩৩'),
    sylhetTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৩৯', '৬.৩৪'),
    sylhetTimes('২৯', '২৩ মে', 'শনিবার', '৩.৩৯', '৬.৩৪'),
    sylhetTimes('৩০', '২৪ মে', 'রবিবার', '৩.৩৮', '৬.৩৫'),
]



function khulnaTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const khulna = [
    khulnaTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.১৪', '৬.২৭'),
    khulnaTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.১৩', '৬.২৭'),
    khulnaTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.১২', '৬.২৮'),
    khulnaTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.১২', '৬.২৮'),
    khulnaTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.১১', '৬.২৯'),
    khulnaTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.১০', '৬.২৯'),
    khulnaTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৯', '৬.৩০'),
    khulnaTimes('৮', '০২ মে', 'শনিবার', '৪.০৮', '৬.৩০'),
    khulnaTimes('৯', '০৩ মে', 'রবিবার', '৪.০৭', '৬.৩০'),
    khulnaTimes('১০', '০৪ মে', 'সোমবার', '৪.০৬', '৬.৩১'),
    khulnaTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০৬', '৬.৩১'),
    khulnaTimes('১২', '০৬ মে', 'বুধবার', '৪.০৫', '৬.৩২'),
    khulnaTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৪.০৪', '৬.৩২'),
    khulnaTimes('১৪', '০৮ মে', 'শুক্রবার', '৪.০৪', '৬.৩২'),
    khulnaTimes('১৫', '০৯ মে', 'শনিবার', '৪.০৩', '৬.৩৩'),
    khulnaTimes('১৬', '১০ মে', 'রবিবার', '৪.০২', '৬.৩৪'),
    khulnaTimes('১৭', '১১ মে', 'সোমবার', '৪.০১', '৬.৩৪'),
    khulnaTimes('১৮', '১২ মে', 'মঙ্গলবার', '৪.০০', '৬.৩৫'),
    khulnaTimes('১৯', '১৩ মে', 'বুধবার', '৪.০০', '৬.৩৫'),
    khulnaTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৯', '৬.৩৫'),
    khulnaTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫৯', '৬.৩৬'),
    khulnaTimes('২২', '১৬ মে', 'শনিবার', '৩.৫৮', '৬.৩৬'),
    khulnaTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫৭', '৬.৩৭'),
    khulnaTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫৭', '৬.৩৭'),
    khulnaTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৫৬', '৬.৩৮'),
    khulnaTimes('২৬', '২০ মে', 'বুধবার', '৩.৫৬', '৬.৩৮'),
    khulnaTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৫৫', '৬.৩৯'),
    khulnaTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৫৫', '৬.৩৯'),
    khulnaTimes('২৯', '২৩ মে', 'শনিবার', '৩.৫৪', '৬.৪০'),
    khulnaTimes('৩০', '২৪ মে', 'রবিবার', '৩.৫৪', '৬.৪০'),
]




function chittagongTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const chittagong = [
    chittagongTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.০৬', '৬.১৭'),
    chittagongTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০৫', '৬.১৮'),
    chittagongTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৪', '৬.১৮'),
    chittagongTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৩', '৬.১৯'),
    chittagongTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৩', '৬.১৯'),
    chittagongTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০২', '৬.১৯'),
    chittagongTimes('৭', '০১ মে', 'শুক্রবার', '৪.০১', '৬.২০'),
    chittagongTimes('৮', '০২ মে', 'শনিবার', '৪.০০', '৬.২০'),
    chittagongTimes('৯', '০৩ মে', 'রবিবার', '৩.৫৯', '৬.২১'),
    chittagongTimes('১০', '০৪ মে', 'সোমবার', '৩.৫৮', '৬.২১'),
    chittagongTimes('১১', '০৫ মে', 'মঙ্গলবার', '৩.৫৮', '৬.২২'),
    chittagongTimes('১২', '০৬ মে', 'বুধবার', '৩.৫৭', '৬.২২'),
    chittagongTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৩.৫৬', '৬.২২'),
    chittagongTimes('১৪', '০৮ মে', 'শুক্রবার', '৩.৫৫', '৬.২২'),
    chittagongTimes('১৫', '০৯ মে', 'শনিবার', '৩.৫৪', '৬.২৩'),
    chittagongTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৩', '৬.২৪'),
    chittagongTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৩', '৬.২৪'),
    chittagongTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫২', '৬.২৫'),
    chittagongTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫১', '৬.২৫'),
    chittagongTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫১', '৬.২৬'),
    chittagongTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫১', '৬.২৬'),
    chittagongTimes('২২', '১৬ মে', 'শনিবার', '৩.৫০', '৬.২৬'),
    chittagongTimes('২৩', '১৭ মে', 'রবিবার', '৩.৪৯', '৬.২৭'),
    chittagongTimes('২৪', '১৮ মে', 'সোমবার', '৩.৪৯', '৬.২৭'),
    chittagongTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৪৮', '৬.২৮'),
    chittagongTimes('২৬', '২০ মে', 'বুধবার', '৩.৪৮', '৬.২৮'),
    chittagongTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৪৭', '৬.২৯'),
    chittagongTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৪৭', '৬.২৯'),
    chittagongTimes('২৯', '২৩ মে', 'শনিবার', '৩.৪৬', '৬.৩০'),
    chittagongTimes('৩০', '২৪ মে', 'রবিবার', '৩.৪৬', '৬.৩০'),
]


function mymensinghTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const mymensingh = [
    mymensinghTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.০৭', '৬.২৬'),
    mymensinghTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০৬', '৬.২৬'),
    mymensinghTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৫', '৬.২৭'),
    mymensinghTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৪', '৬.২৭'),
    mymensinghTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৩', '৬.২৮'),
    mymensinghTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০২', '৬.২৮'),
    mymensinghTimes('৭', '০১ মে', 'শুক্রবার', '৪.০১', '৬.২৯'),
    mymensinghTimes('৮', '০২ মে', 'শনিবার', '৪.০০', '৬.২৯'),
    mymensinghTimes('৯', '০৩ মে', 'রবিবার', '৩.৫৯', '৬.৩০'),
    mymensinghTimes('১০', '০৪ মে', 'সোমবার', '৩.৫৯', '৬.৩০'),
    mymensinghTimes('১১', '০৫ মে', 'মঙ্গলবার', '৩.৫৮', '৬.৩১'),
    mymensinghTimes('১২', '০৬ মে', 'বুধবার', '৩.৫৭', '৬.৩১'),
    mymensinghTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৩.৫৬', '৬.৩২'),
    mymensinghTimes('১৪', '০৮ মে', 'শুক্রবার', '৩.৫৬', '৬.৩২'),
    mymensinghTimes('১৫', '০৯ মে', 'শনিবার', '৩.৫৪', '৬.৩৩'),
    mymensinghTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৪', '৬.৩৩'),
    mymensinghTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৩', '৬.৩৪'),
    mymensinghTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫২', '৬.৩৪'),
    mymensinghTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫১', '৬.৩৫'),
    mymensinghTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫১', '৬.৩৫'),
    mymensinghTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫০', '৬.৩৬'),
    mymensinghTimes('২২', '১৬ মে', 'শনিবার', '৩.৪৯', '৬.৩৬'),
    mymensinghTimes('২৩', '১৭ মে', 'রবিবার', '৩.৪৯', '৬.৩৭'),
    mymensinghTimes('২৪', '১৮ মে', 'সোমবার', '৩.৪৮', '৬.৩৭'),
    mymensinghTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৪৭', '৬.৩৮'),
    mymensinghTimes('২৬', '২০ মে', 'বুধবার', '৩.৪৭', '৬.৩৮'),
    mymensinghTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৪৬', '৬.৩৯'),
    mymensinghTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৪৬', '৬.৩৯'),
    mymensinghTimes('২৯', '২৩ মে', 'শনিবার', '৩.৪৫', '৬.৪০'),
    mymensinghTimes('৩০', '২৪ মে', 'রবিবার', '৩.৪৫', '৬.৪০'),
]


function manikTimes(ramadan, date, day, seheri, iftar) {
    return { ramadan, date, day, seheri, iftar };
}
const manik = [
    manikTimes('১', '২৫ এপ্রিল', 'শনিবার', '৪.১০', '৬.২৬'),
    manikTimes('২', '২৬ এপ্রিল', 'রবিবার', '৪.০৯', '৬.২৭'),
    manikTimes('৩', '২৭ এপ্রিল', 'সোমবার', '৪.০৯', '৬.২৭'),
    manikTimes('৪', '২৮ এপ্রিল', 'মঙ্গলবার', '৪.০৮', '৬.২৮'),
    manikTimes('৫', '২৯ এপ্রিল', 'বুধবার', '৪.০৭', '৬.২৮'),
    manikTimes('৬', '৩০ এপ্রিল', 'বৃহস্পতিবার', '৪.০৬', '৬.২৯'),
    manikTimes('৭', '০১ মে', 'শুক্রবার', '৪.০৫', '৬.২৯'),
    manikTimes('৮', '০২ মে', 'শনিবার', '৪.০৪', '৬.৩০'),
    manikTimes('৯', '০৩ মে', 'রবিবার', '৪.০৩', '৬.৩০'),
    manikTimes('১০', '০৪ মে', 'সোমবার', '৪.০২', '৬.৩১'),
    manikTimes('১১', '০৫ মে', 'মঙ্গলবার', '৪.০১', '৬.৩১'),
    manikTimes('১২', '০৬ মে', 'বুধবার', '৪.০১', '৬.৩২'),
    manikTimes('১৩', '০৭ মে', 'বৃহস্পতিবার', '৪.০০', '৬.৩২'),
    manikTimes('১৪', '০৮ মে', 'শুক্রবার', '৪.০০', '৬.৩২'),
    manikTimes('১৫', '০৯ মে', 'শনিবার', '৩.৫৮', '৬.৩৩'),
    manikTimes('১৬', '১০ মে', 'রবিবার', '৩.৫৭', '৬.৩৩'),
    manikTimes('১৭', '১১ মে', 'সোমবার', '৩.৫৭', '৬.৩৪'),
    manikTimes('১৮', '১২ মে', 'মঙ্গলবার', '৩.৫৬', '৬.৩৪'),
    manikTimes('১৯', '১৩ মে', 'বুধবার', '৩.৫৫', '৬.৩৫'),
    manikTimes('২০', '১৪ মে', 'বৃহস্পতিবার', '৩.৫৫', '৬.৩৫'),
    manikTimes('২১', '১৫ মে', 'শুক্রবার', '৩.৫৪', '৬.৩৬'),
    manikTimes('২২', '১৬ মে', 'শনিবার', '৩.৫৩', '৬.৩৬'),
    manikTimes('২৩', '১৭ মে', 'রবিবার', '৩.৫৩', '৬.৩৭'),
    manikTimes('২৪', '১৮ মে', 'সোমবার', '৩.৫২', '৬.৩৭'),
    manikTimes('২৫', '১৯ মে', 'মঙ্গলবার', '৩.৫২', '৬.৩৮'),
    manikTimes('২৬', '২০ মে', 'বুধবার', '৩.৫১', '৬.৩৮'),
    manikTimes('২৭', '২১ মে', 'বৃহস্পতিবার', '৩.৫০', '৬.৩৯'),
    manikTimes('২৮', '২২ মে', 'শুক্রবার', '৩.৫০', '৬.৩৯'),
    manikTimes('২৯', '২৩ মে', 'শনিবার', '৩.৪৯', '৬.৪০'),
    manikTimes('৩০', '২৪ মে', 'রবিবার', '৩.৪৯', '৬.৪০'),
]


const styles = theme => ({
    tableHead: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: 600,
        overflowY: 'scroll',
        width: '80%',
        marginTop: 30,
        ['@media (max-width:480px)']: {
            width: '100%'
        }
    },
    head: {
        backgroundColor: '##4cae4c',
        color: 'white',
        "& th": {
            backgroundColor: '#b18421',
            color: '#080050',
            fontWeight: 'bold',
            fontSize: '1.5em',
            textAlign: 'center',
            ['@media (max-width:480px)']: {
                fontSize: '.8em'
            }
        }
    },
    down: {
        textDecoration: 'none',
        backgroundColor: '#4cae4c',
        color: 'white',
        textAlign: 'center',
        paddingTop: 10


    },
    print: {
        textDecoration: 'none',
        backgroundColor: '#4cae4c',
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        marginLeft: 20
    },
    downloadHeading: {
        color: 'white',
        textAlign: 'center',
        ['@media (max-width:480px)']: {
            fontSize: '1.5em',
        }
    }


})



class TimeTable extends React.Component {
    state = {
        row: 'dhaka'
    }

    renderDhaka() {
        return (
            <TableBody>
                {dhaka.map((dhaka) => (
                    <TableRow key={dhaka.ramadan} className="row">
                        <TableCell style={{  color: 'white' }}>{dhaka.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{dhaka.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{dhaka.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{dhaka.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{dhaka.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderBarisal() {
        return (
            <TableBody>
                {barisal.map((barisal) => (
                    <TableRow key={barisal.ramadan}>
                        <TableCell style={{  color: 'white' }}>{barisal.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{barisal.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{barisal.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{barisal.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{barisal.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderKhulna() {
        return (
            <TableBody>
                {khulna.map((khulna) => (
                    <TableRow key={khulna.ramadan}>
                        <TableCell style={{  color: 'white' }}>{khulna.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{khulna.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{khulna.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{khulna.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{khulna.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderSylhet() {
        return (
            <TableBody>
                {sylhet.map((sylhet) => (
                    <TableRow key={sylhet.ramadan}>
                        <TableCell style={{  color: 'white' }}>{sylhet.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{sylhet.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{sylhet.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{sylhet.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{sylhet.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderRajshahi() {
        return (
            <TableBody>
                {rajshahi.map((rajshahi) => (
                    <TableRow key={rajshahi.ramadan}>
                        <TableCell style={{  color: 'white' }}>{rajshahi.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{rajshahi.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{rajshahi.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{rajshahi.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{rajshahi.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderRangpur() {
        return (
            <TableBody>
                {rangpur.map((rangpur) => (
                    <TableRow key={rangpur.ramadan}>
                        <TableCell style={{  color: 'white' }}>{rangpur.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{rangpur.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{rangpur.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{rangpur.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{rangpur.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderMymensingh() {
        return (
            <TableBody>
                {mymensingh.map((mymensingh) => (
                    <TableRow key={mymensingh.ramadan}>
                        <TableCell style={{  color: 'white' }}>{mymensingh.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{mymensingh.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{mymensingh.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{mymensingh.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{mymensingh.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderChittagong() {
        return (
            <TableBody>
                {chittagong.map((chittagong) => (
                    <TableRow key={chittagong.ramadan}>
                        <TableCell style={{  color: 'white' }}>{chittagong.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{chittagong.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{chittagong.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{chittagong.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{chittagong.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    renderManik() {
        return (
            <TableBody>
                {manik.map((manik) => (
                    <TableRow key={manik.ramadan}>
                        <TableCell style={{  color: 'white' }}>{manik.ramadan}</TableCell>
                        <TableCell style={{  color: 'white' }}>{manik.date} </TableCell>
                        <TableCell style={{  color: 'white' }}>{manik.day} </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{manik.seheri}  </TableCell>
                        <TableCell style={{  textAlign: 'center', color: 'white' }}>{manik.iftar}  </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        )
    }

    conditional() {
        switch (this.props.division) {
            case '0':
                return this.renderDhaka();
            case '1':
                return this.renderBarisal();
            case '2':
                return this.renderRajshahi();
            case '3':
                return this.renderKhulna();
            case '4':
                return this.renderRangpur();
            case '5':
                return this.renderMymensingh();
            case '6':
                return this.renderSylhet();
            case '7':
                return this.renderChittagong();
            case '8':
                return this.renderManik();
            default:
                return this.renderDhaka();
        }
    }

    render() {
        const { classes } = this.props;
        console.log("test", this.props.division, this.renderDhaka());
        return (
            <div className={classes.tableHead}>
                <Table stickyHeader={true}>
                    <TableHead >
                        <TableRow className={classes.head}>
                            <TableCell >রমজান</TableCell>
                            <TableCell >তারিখ</TableCell>
                            <TableCell >বার</TableCell>
                            <TableCell >সাহরীর শেষ সময়</TableCell>
                            <TableCell >ইফতারের সময়</TableCell>
                        </TableRow>
                    </TableHead>
                    {this.conditional()}
                </Table>
                <h1 className={classes.downloadHeading}>সম্পূর্ণ ক্যালেন্ডার ডাউনলোড করুন</h1>
                <div style={{ display: 'flex', alignItems: 'center', maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
                    <a href="calender.jpeg" download ><GetAppIcon style={{ fontSize: '3rem' }} className={classes.down} /></a>
                    <a href="calender.jpeg"  ><PrintIcon style={{ fontSize: '3rem' }} className={classes.print} /></a>
                </div>



            </div>
        )
    }
}

export default withStyles(styles)(TimeTable);