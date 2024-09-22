import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let counter = 0;
type FormValue = {
  username: string,
  email: string,
  channel: string
}


const YouTubeForm = () => {
  const form = useForm<FormValue>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState
  const onSubmit = (data: FormValue) => {
    console.log("Data sbmitted", data)
  };
  counter++;
  return (
    <div>
      <h2>Youtube form {counter}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        < div className="form-control">
          <label htmlFor='username'>Username</label>
          < input
            type='text'
            id="username"
            {...register('username',
              { required: { value: true, message: "username is required" } })
            }
          />
          <p className="error">{errors?.username?.message}</p>
        </div>
        < div className="form-control">
          <label htmlFor='email'>Email</label>
          < input type='email' id="email" {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email !"
            }
          })} />
          <p className="error">{errors?.email?.message}</p>
        </div>
        < div className="form-control">
          <label htmlFor='channel'>Channel</label>
          < input type='text' id="channel"  {...register('channel', {
            required: {
              value: true,
              message: "channel name is required !"
            }
          })} />
          <p className="error">{errors?.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm