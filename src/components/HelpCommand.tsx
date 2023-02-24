import React from "react";

const Help: React.FC = () => {
    return <table>
    <tr>
      <td className='w-1/4'>about</td>
      <td className='w-3/4'>Everything you never wanted to know about me</td>
    </tr>
    <tr>
      <td className='w-1/4'>banner</td>
      <td className='w-3/4'>Print that gnarley banner again</td>
    </tr>
    <tr>
      <td className='w-1/4'>clear</td>
      <td className='w-3/4'>Clears the screen, of course. Don't even try <span className='text-yellow-500'>cls</span></td>
    </tr>
    <tr>
      <td className='w-1/4'>gui-mode</td>
      <td className='w-3/4'>You wimp</td>
    </tr>
    <tr>
      <td className='w-1/4'>posts</td>
      <td className='w-3/4'>List all the boring posts you can read here (but probably won't)</td>
    </tr>
    <tr>
      <td className='w-1/4'>projects</td>
      <td className='w-3/4'>Take a peek at my awesomeness</td>
    </tr>
    <tr>
        <td colSpan={2} className='pt-4 text-yellow-200 italic'>
            All commands are case sensitive. If you're a VB programmer, please ask for help.
        </td>
    </tr>
    <tr>
        <td colSpan={2} className='pt-2 text-yellow-200 italic'>
            Use the up and down arrow keys to cycle through your command history.
        </td>
    </tr>
  </table>
}

export default Help