import itertools

# Define class hours (from 9:00 AM to 5:00 PM)
class_hours = list(range(9, 17))

# Define the duration of each class (1.5 hours)
class_duration = 1.5

# Define lunch break (12:00 PM to 1:00 PM)
lunch_break = (12, 13)

# Generate all possible class time slots
available_slots = [(start, start + class_duration) for start in class_hours if start + class_duration <= lunch_break[0] or start >= lunch_break[1]]

# List of courses to schedule (e.g., Course 1, Course 2, etc.)
courses = ['Course 1', 'Course 2', 'Course 3']

# Create all possible combinations of course schedules
course_schedules = list(itertools.permutations(available_slots, len(courses)))

# Filter out schedules that overlap
valid_schedules = []
for schedule in course_schedules:
    overlap = False
    for i in range(len(schedule) - 1):
        if schedule[i][1] > schedule[i + 1][0]:
            overlap = True
            break
    if not overlap:
        valid_schedules.append(schedule)

# Print valid schedules
if valid_schedules:
    print("Valid Class Schedules:")
    for idx, schedule in enumerate(valid_schedules, start=1):
        print(f"Schedule {idx}:")
        for course, slot in zip(courses, schedule):
            start_time, end_time = slot
            print(f"{course}: {start_time:.2f} - {end_time:.2f}")
        print()
else:
    print("No valid schedules found.")
