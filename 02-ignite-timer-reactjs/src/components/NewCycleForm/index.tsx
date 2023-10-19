import { FormContainer, MinutesAmountInput, TaskInput } from "./style"

export const NewmCycleForm = () => {
  return (
    <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id='task-suggestions'>
            <option value='Minecraft Server List' />
          </datalist>

          <label htmlFor=''>durante</label>
          <MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            disabled={!!activeCycle}
            step={5}
            min={1}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>
  )
}