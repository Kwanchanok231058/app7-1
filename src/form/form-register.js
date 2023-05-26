import React from 'react'
import { useForm } from 'react-hook-form'


export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm = (event) => {
        //..
    }
    const err = { fontSize: 'smaller', color: ' Indigo', marginTop: 3 }

    return (
        <div class="container-fluid p-5 text-danger  text-center">
            <h1>Register Member</h1>

            <div className="container mt-5 p-3 rounded" style={{ width: '500px', background: 'Pink' }}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="username" placeholder="กรุณากรอกชื่อ-นามสกุล" name="username"
                            {...register('name', { required: true, maxLength: 30 })}
                        />
                        {errors.name && <div style={err}>กรุณาระบุชื่อ-นามสกุล</div>}
                        <label for="name">username:</label>
                    </div>

                    <div class="form-floating mb-3 mt-3">
                        <input type="password" class="form-control" id="pwd" placeholder="กรุณากรอกรหัสผ่าน" name="pswd" />

                        {errors.name && <div style={err}>กรุณาระบุรหัสผ่าน</div>}
                        <label for="name">password:</label>
                    </div>

                    <div class="form-floating mb-3 mt-3">
                        <input type="name" class="form-control" id="name" placeholder="กรุณากรอกชื่อ" name="name" />

                        {errors.name && <div style={err}>กรุณากรอกชื่อ</div>}
                        <label for="name">name:</label>
                    </div>

                    <div class="form-floating mb-3 mt-3 ">
                        <input type="email" class="form-control" id="email" placeholder="กรุณากรอก Email" name="email"
                            {...register('email', { required: true, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/ } })}

                        />
                        {errors.email && <div style={err}>กรุณาระบุ Email</div>}

                        <label for="email">Email</label>
                    </div>

                    <div class="form-floating mb-3  p-3">
                        <p>gender</p>
                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked /> : Male
                        <label class="form-check-label" for="radio1" ></label>

                        <input for="name" type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" /> : Female
                        <label class="form-check-label" for="radio2"></label>
                    </div>

                    <div class="container mt-3">
                        <form action="/action_page.php">
                            <label for="Age ">Age:</label>
                            <select class="form-select" id="sel1" name="sellist1">
                                <label for="Age: ">Age:</label>
                                <option>0-20</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select>
                        </form>
                    </div>

                    <div class="form-floating mb-3 mt-3">
                        <input type="number" class="form-control" id="Salary" name="Salary" step="any"
                            {...register('Salary', { validate: value => parseFloat(value) > 0 })}
                        />
                        {errors.Age && <div style={err}>กรุณาระบุเงินเดือน</div>}

                        <label for="Salary">Salary :</label>
                    </div>

                    <div class="form-floating mb-3  p-3">
                        <p>Interested :</p>
                        <input type="checkbox" class="form-check-input" id="radio1" name="optradio" value="option1" checked /> : Youtube
                        <label class="form-check-label" for="check1" ></label>
                        <input for="name" type="checkbox" class="form-check-input" id="radio2" name="optradio" value="option2" /> : Netflix
                        <label class="form-check-label" for="check2"></label>
                        <input for="name" type="checkbox" class="form-check-input" id="radio3" name="optradio" value="option3" /> : Game
                        <label class="form-check-label" for="check3"></label>
                    </div>

                    <button type="register" class="btn btn-outline-danger">register</button>
                    <button type="cancle" class="btn btn-outline-danger">cancle</button>

                </form>
            </div>
        </div>

    )
}
